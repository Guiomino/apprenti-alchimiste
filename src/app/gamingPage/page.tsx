"use client";
// gamingPage/page.tsx
import { useState } from "react";
import styles from "./page.module.scss";
import ApothecaryCabinetComponent from "@/components/apothecaryCabinet/apothecaryCabinet";
import MarketBtn from "@/components/market/marketBtn";
import ModalIngredients from "@/components/modalIngredients/modalIngredients";
import { IngredientType } from "@/OOP/IngredientClass";

const GamingPage = () => {
    // HANDLE MODAL INGREDIENTS
    const [isModalIngredientsOpen, setIsModalIngredientsOpen] = useState(false);
    const [ingredientType, setIngredientType] = useState<IngredientType | null>();

    const openIngredientsModal = (type: IngredientType) => {
        setIngredientType(type);
        setIsModalIngredientsOpen(true);
    };

    const closeIngredientsModal = () => {
        setIsModalIngredientsOpen(false);
        setIngredientType(null);
    };

    // setIngredient(new Ingredient("Champignon", 10, 1));

    return (
        <>
            {isModalIngredientsOpen && (
                <ModalIngredients
                    ingredientType={ingredientType ?? IngredientType.MINERAL} // Si la variable ingredientType est nulle, alors celui par défaut sera la catégorie "MINERAL"
                    closeIngredientsModal={closeIngredientsModal}
                    setIngredientType={setIngredientType}
                />
            )}
            <div className={styles.gamingPage}>
                {/* <div className={styles.content}>
                    <button>Market</button>
                </div> */}
                <ApothecaryCabinetComponent
                    openIngredientsModal={openIngredientsModal}
                />
            </div>

            <div className={styles.btnContainer}>
                <MarketBtn />
            </div>
        </>
    );
};

export default GamingPage;
