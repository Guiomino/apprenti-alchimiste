"use client"
// gamingPage/page.tsx
import { useState } from "react";
import styles from "./page.module.scss";
import ApothecaryCabinetComponent from "../components/apothecaryCabinet/apothecaryCabinet";
import ModalIngredients from "../components/modalIngredients/modalIngredients";

const GamingPage = () => {

    // HANDLE MODAL INGREDIENTS
    const [isModalIngredientsOpen, setIsModalIngredientsOpen] = useState(false);
    const [ingredientType, setIngredientType] = useState('');

    const openIngredientsModal = (type: string) => {
        setIsModalIngredientsOpen(true);
        setIngredientType(type);
    };

    const closeIngredientsModal = () => {
        setIsModalIngredientsOpen(false);
        setIngredientType('');
    };

    return (
        <>
            {isModalIngredientsOpen &&  <ModalIngredients ingredientType={ingredientType} closeIngredientsModal={closeIngredientsModal} setIngredientType={setIngredientType} />}
            <div className={styles.gamingPage}>
                <h1>Page du jeu en cours</h1>
                <p>Ceci est un composant typescript.</p>
                <span>➡️ N&apos;hésite pas à me prodiguer tes conseils Karlito</span>
            </div>
            <ApothecaryCabinetComponent openIngredientsModal={openIngredientsModal} />
        </>
    );
};

export default GamingPage;