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
    description: string;
    quantity: number;
    rarity: IngredientRarity;
    type: IngredientType;
    constructor(name: string, price: number, description: string, quantity: number, type: IngredientType, rarity: IngredientRarity = IngredientRarity.COMMON) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.rarity = rarity;
        this.type = type;
    }

    getIngredientName() {
        return this.name;
    }

    getIngredientPrice() {
        return this.price * this.quantity;
    }

    getIngredientDescription() {
        return this.description;
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

    setIngredientName(name: string) {
        this.name = name;
    }

    setIngredientQuantity(quantity: number) {
        this.quantity = quantity;
    }

    setIngredientDescription(description: string) {
        this.description = description;
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