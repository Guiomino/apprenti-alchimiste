// IngredientMarketComponent.tsx
import Image from 'next/image';
import styles from "./ingredientMarketComponent.module.scss";
import React, { useState, useEffect } from 'react';

interface IngredientProps {
    img: string;
    name: string;
    quantity: number;
    minPrice: number;
    maxPrice: number;
    rarity: string;
    type: string;
}

const typeImages: { [key: string]: string } = {
    Mineral: "/images/Type_Mineral.svg",
    Vegetal: "/images/Type_Vegetal.svg",
    Animal: "/images/Type_Animal.svg",
    Mushroom: "/images/Type_Mushroom.svg",
}

const IngredientMarketComponent: React.FC<IngredientProps> = ({ img, name, quantity, minPrice, maxPrice, rarity, type }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        const importImage = async () => {
            try {
                const importedImage = await import(`../../../public${img}`);
                setImageSrc(importedImage.default);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        importImage();

        const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
        setPrice(randomPrice);

        // Nettoyage de l'effet
        return () => {
            setImageSrc(null);
        };
    }, [img, minPrice, maxPrice]);

    return (
        // <div className={styles.ingredientCardMarket}>
        <div className={`${styles.ingredientCardMarket} ${rarity === "Common" ? styles.commonStyle : rarity === "Uncommon" ? styles.uncommonStyle : rarity === "Rare" ? styles.rareStyle : rarity === "Epic" ? styles.epicStyle : ""}`}>
            <div className={styles.cardLeft}>{imageSrc && <Image src={imageSrc} alt={name} />}</div>

            <div className={styles.cardMiddle}>
                <button className={styles.buttonWithOverlay}>{name}</button>
                <div>
                    <div className={styles.rarity}>
                        <div className={styles.star}></div>
                        <p>{rarity}</p>
                    </div>
                    <div className={styles.type}>
                        <div className={styles.categoriTypeSVG}>
                            {typeImages[type] && <Image src={typeImages[type]} alt={type} width={15} height={15} />}
                        </div>
                        <p>{type}</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardRight}>
                <div className={styles.multiplier}>
                    <button className={styles.x1}>x1</button>
                    <button className={styles.x10}>x10</button>
                    <button className={styles.x100}>x100</button>
                    <button className={styles.max}>max</button>
                </div>
                <div className={styles.price}>
                    <p>Price:<span>🪙 {price}</span></p>
                </div>
                <div className={styles.quantity}>
                    <p>Quantity:<span>0 / {quantity}</span></p>
                    <div>
                        <button className={styles.quantityIncrement}>-</button>
                        <button className={styles.quantityDecrement}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IngredientMarketComponent;
