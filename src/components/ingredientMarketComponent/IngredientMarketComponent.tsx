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

            <div className={styles.cardMiddle}><button className={styles.buttonWithOverlay}>{name}</button>
                <div>
                    <div className={styles.rarity}>
                        <div className={styles.star}></div>
                        <p>{rarity}</p>
                    </div>
                    <div className={styles.type}>
                        <div className={styles.categoriTypeSVG}></div>
                        <p>{type}</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardRight}><p>Quantity : {quantity}</p>
                <p>Price : {price}</p></div>
        </div>
    );
}

export default IngredientMarketComponent;
