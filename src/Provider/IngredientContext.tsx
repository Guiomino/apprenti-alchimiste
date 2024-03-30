"use client"

import Ingredient from "@/OOP/IngredientClass";
import { createContext, useContext, useEffect, useState } from "react";

interface IngredientContextType {
    ingredients: Ingredient[];
    addIngredient: (ingredient: Ingredient) => void;
    removeIngredient: (ingredient: Ingredient) => void;
};

const IngredientContext = createContext<IngredientContextType>({} as IngredientContextType);

type IngredientProviderProps = {
    children: React.ReactNode;
};


export const IngredientProvider = ({ children }: IngredientProviderProps) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        console.table(ingredients);
    }, [ingredients]);

    const addIngredient = (ingredient: Ingredient) => {
        setIngredients([...ingredients, ingredient]);
    };

    const removeIngredient = (ingredient: Ingredient) => {
        setIngredients(ingredients.filter((i) => i.name !== ingredient.name));
    }

    return (
        <IngredientContext.Provider value={{ ingredients, addIngredient, removeIngredient }}>
            {children}
        </IngredientContext.Provider>
    );
}

export default IngredientContext
export const useIngredient = () => useContext(IngredientContext);