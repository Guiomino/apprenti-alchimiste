'use client'
// page.tsx
import { useState } from "react";
import styles from "./page.module.scss";
import ApothecaryCabinetComponent from "../components/apothecaryCabinet/apothecaryCabinet";
import ModalIngredients from "../components/modalIngredients/modalIngredients";

const GamingPage = () => {

    // HANDLE MODAL INGREDIENTS
    const [isModalIngredientsOpen, setIsModalIngredientsOpen] = useState(false);
    const openIngredientsModal = () => {
        setIsModalIngredientsOpen(true);
    };
    const closeIngredientsModal = () => {
        setIsModalIngredientsOpen(false);
    };

    return (
        <>
            {isModalIngredientsOpen && <ModalIngredients closeIngredientsModal={closeIngredientsModal} />}
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
