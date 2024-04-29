// IngredientMarketComponent.tsx
import Image from "next/image";
import styles from "./ingredientMarketComponent.module.scss";
import React, { useState, useEffect } from "react";

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
};

const starImages: { [key: string]: string } = {
    Common: "/images/Star_Common.png",
    Uncommon: "/images/Star_Uncommon.png",
    Rare: "/images/Star_Rare.png",
    Epic: "/images/Star_Epic.png",
}

const IngredientMarketComponent: React.FC<IngredientProps> = ({
    img,
    name,
    quantity,
    minPrice,
    maxPrice,
    rarity,
    type,
}) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [price, setPrice] = useState<number>(0);
    const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);
    const [multiplier, setMultiplier] = useState<number>(1);

    const handleQuantity = (increment: boolean) => {
        const incrementValue = multiplier === 1 ? 1 : multiplier === 10 ? 10 : 100;
        if (increment) {
            setCurrentQuantity(prevQuantity => prevQuantity + incrementValue);
        }
        else {
            setCurrentQuantity(prevQuantity => Math.max(prevQuantity - incrementValue, 0));
        }
    }

    const handleMultiplier = (multiplierValue: number) => {
        setMultiplier(multiplierValue);
    }

    const handleReset = () => {
        setCurrentQuantity(0);
    }

    const totalPrice = price * currentQuantity;

    useEffect(() => {
        const importImage = async () => {
            try {
                const importedImage = await import(`../../../public${img}`);
                setImageSrc(importedImage.default);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        importImage();

        const randomPrice =
            Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
        setPrice(randomPrice);

        // Nettoyage de l'effet
        return () => {
            setImageSrc(null);
        };
    }, [img, minPrice, maxPrice]);


    // GESTION DES BOUTONS +1, +10, +100


    return (
        <div
            className={`${styles.ingredientCardMarket} ${rarity === "Common"
                ? styles.commonStyle
                : rarity === "Uncommon"
                    ? styles.uncommonStyle
                    : rarity === "Rare"
                        ? styles.rareStyle
                        : rarity === "Epic"
                            ? styles.epicStyle
                            : ""
                }`}
        >
            <div className={styles.cardLeft}>
                {imageSrc && <Image src={imageSrc} alt={name} />}
            </div>

            <div className={styles.cardMiddle}>
                <button className={styles.buttonWithOverlay}>{name}</button>
                <div className={styles.rarityAndType}>
                    <div className={styles.rarity}>
                        <div className={styles.star}>
                            {starImages[rarity] && <Image src={starImages[rarity]} alt={rarity} width={20} height={20} />}
                            <p>{rarity}</p>
                        </div>
                    </div>
                    <div className={styles.categoriTypeSVG}>
                        {typeImages[type] && (
                            <Image src={typeImages[type]} alt={type} width={15} height={15} />
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.cardRight}>
                <div className={styles.multiplier}>
                    <button className={`${styles.multiplierButton} ${multiplier === 1 ? styles.active : ''}`} onClick={() => handleMultiplier(1)}>x1</button>
                    <button className={`${styles.multiplierButton} ${multiplier === 10 ? styles.active : ''}`} onClick={() => handleMultiplier(10)}>x10</button>
                    <button className={`${styles.multiplierButton} ${multiplier === 100 ? styles.active : ''}`} onClick={() => handleMultiplier(100)}>x100</button>
                    <button className={styles.multiplierButton} onClick={handleReset}>reset</button>
                </div>
                <div className={styles.price}>
                    <p>
                        Price:<span>🪙 {price}</span>
                        Total:<span>🪙 {totalPrice}</span>
                    </p>
                </div>
                <div className={styles.quantity}>

                    <div className={styles.quantityStock}>
                        <p>Quantity:<span>{currentQuantity}</span></p>
                    </div>

                    <div className={styles.quantityButton}>
                        <button className={styles.quantityIncrement} onClick={() => handleQuantity(false)}>-</button>
                        <button className={styles.quantityDecrement} onClick={() => handleQuantity(true)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientMarketComponent;
