class Ingredient {
    name: string;
    price: number;
    quantity: 1 | 2 | 3;
    constructor(name: string, price: number, quantity: 1 | 2 | 3) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
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

    setIngredientQuantity(quantity: 1 | 2 | 3) {
        this.quantity = quantity;
    }

    setIngredientName(name: string) {
        this.name = name;
    }

    setIngredientPrice(price: number) {
        this.price = price;
    }
}

export default Ingredient;