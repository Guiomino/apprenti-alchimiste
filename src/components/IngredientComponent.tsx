"use client"

import React from 'react'

interface IngredientProps {
    img: string;
    name: string;
    quantity: number;
    price: number;
    rarity: string;
    type: string;
}

const IngredientComponent = ({ img, name, quantity, price, rarity, type }: IngredientProps) => {
    return (
        <div>
            <img src={img} alt="ert" />
            <button>{name}</button>
            <p>{quantity}</p>
            <p>{price}</p>
            <p>{rarity}</p>
            <p>{type}</p>
        </div>
    )
}

export default IngredientComponent