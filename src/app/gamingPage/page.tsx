"use client";
// gamingPage/page.tsx
import { useState } from "react";
import styles from "./page.module.scss";
import ApothecaryCabinetComponent from "@/components/apothecaryCabinet/apothecaryCabinet";
import MarketBtn from "@/components/market/marketBtn";
import MarketModal from "@/components/market/marketModal";
import ModalIngredients from "@/components/modalIngredients/modalIngredients";
import { IngredientType } from "@/OOP/IngredientClass";
import CustomCursor from "@/components/CustomCursor/CustomCursor"

const GamingPage = () => {
    // HANDLE MODALS
    const [isMarketModalOpen, setIsMorketModalOpen] = useState(false);
    const [isModalIngredientsOpen, setIsModalIngredientsOpen] = useState(false);
    const [ingredientType, setIngredientType] = useState<IngredientType | null>();

    const openMarketModal = () => {
        setIsMorketModalOpen(true);
    }

    const closeMarketModal = () => {
        setIsMorketModalOpen(false);
    }

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
        <CustomCursor/>
            {isMarketModalOpen && <MarketModal closeMarketModal={closeMarketModal} />}

            {isModalIngredientsOpen && (
                <ModalIngredients
                    ingredientType={ingredientType ?? IngredientType.MINERAL} // Si la variable ingredientType est nulle, alors celui par défaut sera la catégorie "MINERAL"
                    closeIngredientsModal={closeIngredientsModal}
                    setIngredientType={setIngredientType}
                />
            )}
            <div className={styles.gamingPage}>
                <div className={styles.btnContainer}>
                    <MarketBtn openMarketModal={openMarketModal} />
                </div>

                <ApothecaryCabinetComponent
                    openIngredientsModal={openIngredientsModal}
                />
            </div>

        </>
    );
};

export default GamingPage;
