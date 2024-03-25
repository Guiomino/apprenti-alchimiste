// ModalIngredients.tsx
import React from "react";
import dataIngredients from "../../../data/ingredientsFR.json"
import styles from "./modalIngredients.module.scss";

interface ModalIngredientsProps {
    closeIngredientsModal: () => void;
}

const ModalIngredients: React.FC<ModalIngredientsProps> = ({ closeIngredientsModal }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
                <div className={styles.modalTop}>
                    
                    <div className={styles.filterAndGoldAndClose}>
                        <button className={styles.filter}>Filtre</button>
                        <span className={styles.gold}>-- 🪙 3226 --</span>
                        <button className={styles.close} onClick={closeIngredientsModal}>X</button>
                    </div>
                    <h2 className={styles.title}>💎 MINERAL</h2>
                    <div className={styles.category}>
                        <button className={styles.mineral}>💎</button>
                        <button className={styles.vegetal}>🪻</button>
                        <button className={styles.animal}>🦝</button>
                        <button className={styles.mushroom}>🍄</button>
                    </div>
                </div>
                <div className={styles.modalMiddle}>


                    {Object.keys(dataIngredients.ingredients.mineral).map((mineralName, index) => (
                        <div key={index} className={styles.ingredientCard}>
                            <h3>{mineralName}</h3>
                            <p><span>Price:</span> {dataIngredients.ingredients.mineral[mineralName].price}</p>
                            <p><span>Description:</span> {dataIngredients.ingredients.mineral[mineralName].description}</p>
                            <p><span>Rareté:</span> {dataIngredients.ingredients.mineral[mineralName].rarity}</p>
                        </div>
                    ))}


                    <div className={styles.scrollList}></div>
                </div>
                <div className={styles.modalBottom}>
                    <div className={styles.costAndNumberOfIngreients}>
                        <div className={styles.cost}></div>
                        <div className={styles.numberOfIngredients}></div>
                    </div>
                    <div className={styles.addButton}></div>
                </div>
            </div>
        </div>
    );
};

export default ModalIngredients;
