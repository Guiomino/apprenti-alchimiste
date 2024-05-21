// IngrImageProvider.tsx

"use client";

import React from 'react'
import fs from "fs" // files system


const ingrImageContext = React.createContext(null);

const images = [];




const IngrImageProvider = () => {

    const data = JSON.parse(fs.readFileSync("../data/ingredients.json").toString())
    console.log(data);
    

    return (
        <div>IngrImageProvider</div>
    )
}

export default IngrImageProvider