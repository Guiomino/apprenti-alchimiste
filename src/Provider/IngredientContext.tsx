// IngredientContext.tsx

"use client"

import React from 'react'

interface IngredientReducerI {
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
    setImage: (image: string) => void;
}

type IngredientType =
    | { type: "SET_NAME", name: string }
    | { type: "SET_RARITY", rarity: string }
    | { type: "SET_IMAGE", image: string }

const ingredientContext = React.createContext<IngredientContextI>({} as IngredientContextI)

const IngredientProvider = ({ children }) => {

    const reducer = (state: IngredientReducerI, action: IngredientType): IngredientReducerI => {
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

    const setImage = (image: string) => {
        dispatch({ type: 'SET_IMAGE', image })
    }


    return (
        <ingredientContext.Provider value={{ ...state, setName, setRarity, setImage }}>
            {children}
        </ingredientContext.Provider>
    )
}

export default IngredientProvider
export const useIngredient = () => React.useContext(ingredientContext);