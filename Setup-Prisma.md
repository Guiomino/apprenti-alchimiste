Pour commencer, il faut installer les 2 librairies de Prisma:
```bash
npm install prisma @prisma/client
```

Dans ce cas je l'avais déja installé.

En suite il faut créer les fichiers dont Prisma a besoin pour fonctionner correctement, mais au lieu de les créer soi meme, nous avons une commande a notre disposition:

```bash
npx prisma init
```

Cette commande va créer un dossier nommé "prisma" dans la racine meme du projet.
Nous y retrouverons le fichier "schema.prisma" aui serait un équivalent d'un fichier SQL a éxécuter.

Dans ce dossier `prisma` nous allons créer le fichier "client.ts" et avec ce fichier nous allons créer ce qu'on appelle un "singleton".

Un singleton est un terme utilisé pour une méthode pour initialiser un objet afin que dans tout le projet il n'y ait qu'un seul exemplaire de cet objet ce qui pourrait optimiser notre appli et dans certains cas éviter les attaques DDoS.

Par exemple, pour Prisma nous allons créer un singleton en s'assurant que quand l'application s'initialise, il ne s'effectue qu'une seule connexion a notre base de données, du cqs contraire, les utilisateurs pourraient faire des requetes "infinies" et remplir notre base de données de beaucoup de connexions, ce qui pourrait crasher la base de données et surement aussi l'application.

Voici le code du singleton:
```ts
import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
    return new PrismaClient();
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = global.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") global.prismaGlobal = prisma;
```
Source: [nextjs-prisma-client-dev-practices](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)


```ts
import { PrismaClient } from "@prisma/client"
```

Tout d'abord nous importons PrismaClient qui nous servira principalement q créer la connexion vers notre base de données et effectuer des requetes a celle-ci.

```ts
const prismaClientSingleton = () => {
    return new PrismaClient();
}
```

Cette fonction va créer une nouvelle instance de Prisma (et donc si c'est une nouvelle instance, c'est forcément une nouvelle connexion a la base de données).

Donc il faut s'assurer de n'appeler cette fonction qu'UNE SEULE FOIS dans toute notre application.

```ts
declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}
```

Tout d'abord, le `declare global` n'est disponible que sur TypeScript. Selon ChatGPT, cette ligne indique que l'on va créer des variables qui seront reconnus globalement (et donc pas besoin d'importer ces variables dans tous nos fichiers).

En suite nous créons la variable prismaGlobal (elle doit etre créé avec `var` et non pas avec `let` ou `const`).

La variable est typée avec `undefined | ReturnType<typeof prismaClientSingleton>` ce aui veut dire plusieurs choses:
1. La variable peut etre undefined (undefined c'est quand on créé une variable mais sans contenu, comme par exemple `let test;` alors que si le résultat es null, cela veut dire que la variable a belle et bien une valeur mais nulle comme `const test = null;`).
2. Dans le cas ou la variable ne serait pas undefined, elle pourrait alors etre du type ReturnType<typeof prismaClientSingleton>
3. `typeof prismaClientSingleton` veut dire qu'on obtiendra le type de la fonction "prismaClientSingleton()", ce aui serait égal a "prismaClientSingleton" de toute façon.
4. `ReturnType<...>` ici nous obtenons ce aue le type retournera, par exemple le typeof nous retournera "prismaClientSingleton" puis qu'on vise cette meme fonction, mais ReturnType nous donnera le type de valeur que pourra nous retourner cette fonction, et dans ce cas la ce sera l'instance de l'objet de "PrismaClient" (ou la connexion a notre base do données si tu préferes) vu que la fonction "prismaClientSingleton" fait un return de "new PrismaClient()".

```ts
const prisma = global.prismaGlobal ?? prismaClientSingleton();

export default prisma;
```

Ici nous déclarons la variable "prisma" qui sera égale a la valeur de prismaGlobal (variable disponible dans toute l'application sans besoin de l'importer), mais si cette variable est undefined (rappelle toi il peut etre undefined ou ReturnType<...>) alors cette variable de "prisma" sera égale a une nouvelle instance de PrismaClient et donc ce sera une nouvelle connexion.

Puis nous exportons cette variable que nous devrons toujours utiliser pour accéder a notre base de données.

```ts
if (process.env.NODE_ENV !== "production") global.prismaGlobal = prisma;
```

Ici nous changeons la valeur de "prismaGlobal" a la nouvelle valeur de "prisma", mais cela se passe uniquement si l'application est en mode "production" (il n'y a rien a toucher, tout est automatique pour détecter ce genre de choses).

Et si tu regardes tout le code a nouveau, tu te rendras compte que quand l'application démarre, elle initialisera la variable "prismaGlobal" et par défaut elle sera undefined, puis notre variable "prisma" appellera la fonction "prismaClientSingleton()" puisque la variable globale "prismaGlobal" est undefined au début, puis dans le cas ou l'application est en production, alors "prismaGlobal" aura une valeur VALIDE (la valeur sera l'instance / l'objet PrismaClient).

Mais vu qu'on sera surtout dans un environnement de développement et bien la méthode du Singleton ne sera pas vraiment respectée vu aue comme je l'ai dit, ça n'arrive que en production !

Pas besoin d'avoir ce singleton en production.