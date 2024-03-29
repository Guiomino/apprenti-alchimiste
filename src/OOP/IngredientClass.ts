export enum IngredientRarity {
    COMMON = "common",
    UNCOMMON = "uncommon",
    RARE = "rare",
    EPIC = "epic",
};

export enum IngredientType {
    MINERAL = "mineral",
    VEGETAL = "vegetal",
    ANIMAL = "animal",
    MUSHROOM = "mushroom",
};

export const parseIngredientRarity = (rarity: string): IngredientRarity => {
    const rarityKey = rarity.toUpperCase() as keyof typeof IngredientRarity;
    if (rarityKey in IngredientRarity) {
        return IngredientRarity[rarityKey];
    }
    throw new Error("Invalid rarity");
};

class Ingredient {
    name: string;
    price: number;
    quantity: 1 | 2 | 3;
    rarity: IngredientRarity;
    type: IngredientType;
    constructor(name: string, price: number, quantity: 1 | 2 | 3, type: IngredientType, rarity: IngredientRarity = IngredientRarity.COMMON) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.rarity = rarity;
        this.type = type;
    }

    getIngredientPrice() {
        return this.price * this.quantity;
    }

    getIngredientName() {
        return this.name;
    }

    getIngredientQuantity() {
        return this.quantity;
    }

    getIngredientType() {
        return this.type;
    }

    getIngredientRarity() {
        return this.rarity;
    }

    setIngredientQuantity(quantity: 1 | 2 | 3) {
        this.quantity = quantity;
    }

    setIngredientName(name: string) {
        this.name = name;
    }

    setIngredientPrice(price: number) {
        this.price = price;
    }

    setIngredientType(type: IngredientType) {
        this.type = type;
    }

    setIngredientRarity(rarity: IngredientRarity) {
        this.rarity = rarity;
    }
}

export default Ingredient;