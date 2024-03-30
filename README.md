# Setup
```bash
git clone https://github.com/Guiomino/apprenti-alchimiste
cd apprenti-alchimiste
npm install
docker-compose up -d
npx prisma generate
npx prisma db push
npm run dev
```

If you don't have Docker installed click [here](https://docs.docker.com/engine/install/) to install it.