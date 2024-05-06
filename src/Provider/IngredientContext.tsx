// IngredientContext.tsx

"use client"

import React, { useContext, useReducer } from 'react'

interface IngredientI {
    id: number;
    name: string;
    rarity: string;
    type: string;
    min_price: number;
    max_price: number;
    description: string;
    image: string;
    bonus: string;
    malus: string;
}

interface IngredientContextI {
    id: number;
    name: string;
    rarity: string;
    type: string;
    min_price: number;
    max_price: number;
    description: string;
    image: string;
    bonus: string;
    malus: string;
    setName: (name: string) => void;
    setRarity: (rarity: string) => void;
}

type IngredientType =
    | { type: "SET_NAME", name: string }
    | { type: "SET_RARITY", rarity: string }

const ingredientContext = React.createContext<IngredientContextI>({} as IngredientContextI)

const IngredientProvider = ({ children }) => {

    const reducer = (state: IngredientI, action: IngredientType): IngredientI => {
        return {
            ...state
        }
    }

    const [state, dispatch] = React.useReducer(reducer, {
        id: 0,
        name: "",
        rarity: "",
        type: "",
        min_price: 0,
        max_price: 0,
        description: "",
        image: "",
        bonus: "",
        malus: "",
    });

    // EN HAUT C'EST UNIQUEMENT LE REDUCER

    // EN BAS C'EST UNIQUEMENT LE CONTEXT

    const setName = (name: string) => {
        dispatch({ type: "SET_NAME", name })
    }
    const setRarity = (rarity: string) => {
        dispatch({ type: 'SET_RARITY', rarity })
    }

    

    return (
        <ingredientContext.Provider value={{ ...state, setName, setRarity }}>
            {children}
        </ingredientContext.Provider>
    )
}

export default IngredientProvider
export const useIngredient = () => useContext(ingredientContext);