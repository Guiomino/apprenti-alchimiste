const json = require("./ingredients.json");
const fs = require("fs");

const percentages = {
    common: {
        min: 1,
        max: 20
    },
    uncommon: {
        min: 21,
        max: 60
    },
    rare: {
        min: 61,
        max: 180
    },
    epic: {
        min: 181,
        max: 350
    },
};

const newJson = {
    ingredients: {}
};

const test = {
    ingredients: {
        mineral: [],
        vegetal: [],
        animal: [],
        mushroom: [],
    }
}

// Object.keys(test.ingredients); // ["mineral", "vegetal", "animal", "mushroom"]

console.log(newJson);

Object.keys(json.ingredients).map((ingredientType) => {
    // console.log(ingredientType);
    newJson.ingredients[ingredientType] = [];
    json.ingredients[ingredientType].map((ingredient) => {
        delete ingredient.price;
        newJson.ingredients[ingredientType].push({
            ...ingredient,
            min_price: percentages[ingredient.rarity].min,
            max_price: percentages[ingredient.rarity].max,
        })
    });
})

console.log(newJson.ingredients.mushroom[0]);

fs.writeFileSync("./ingredients-formatted.json", JSON.stringify(newJson, null, 4));




// json.ingredients[ingredientType] => [ { name: 'Copper', rarity: 'common', price: 1 } ]