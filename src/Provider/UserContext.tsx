// UserContext.tsx

"use client"

import React, { useContext } from 'react'

interface PotionI {
    id: number;
    name: string;
    effect: string;
    price: number;
    image: string;
}

interface UserContextI {
    id: string;
    username: string;
    gold: number;
    character_level: number;
    table_level: number;
    stock_level: number;
    inventory: PotionI[];
    setUsername: (name: string) => void;
    setGold: (amount: number) => void;
}

interface UserStateI {
    id: string;
    username: string;
    gold: number;
    character_level: number;
    table_level: number;
    stock_level: number;
    inventory: PotionI[];
}

type ActionType =
    | { type: "SET_USERNAME", username: string; }
    | { type: "SET_GOLD", gold: number; }
    | { type: "CHARACTER_LEVEL_UP" }
    | { type: "TABLE_LEVEL_UP" }
    | { type: "STOCK_LEVEL_UP" }
    | { type: "ADD_POTION", potion: PotionI }
    | { type: "REMOVE_POTION", potion: PotionI };

const UserContext = React.createContext<UserContextI>({} as UserContextI);

const UserProvider = ({ children }: {
    children: React.ReactNode
}) => {

    const reducer = (state: UserStateI, action: ActionType): UserStateI => {
        return {
            ...state, ...action
        }
    }

    const [state, dispatch] = React.useReducer(reducer, {
        id: '',
        username: '',
        gold: 0,
        character_level: 0,
        table_level: 0,
        stock_level: 0,
        inventory: [],
    } as UserStateI);

    const setUsername = (name: string) => {
        dispatch({ type: "SET_USERNAME", username: name });
    }

    const setGold = (amount: number) => {
        dispatch({ type: "SET_GOLD", gold: amount })
    }

    return (
        <UserContext.Provider value={{ ...state, setUsername, setGold }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
export const useUser = () => useContext(UserContext);