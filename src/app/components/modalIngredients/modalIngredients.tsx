import React from "react";
import dataIngredients from "@/data/ingredientsFR.json"
import styles from "./modalIngredients.module.scss";

interface Ingredient {
    price: number;
    description: string;
    rarity: string;
    bonus: { id: string; magnitude: number };
    malus: { id: string; magnitude: number };
}

interface IngredientsData {
    [key: string]: { [key: string]: Ingredient };
}

interface ModalIngredientsProps {
    closeIngredientsModal: () => void;
    ingredientType: string;
    setIngredientType: (type: string) => void; // Ajout de la fonction pour définir la catégorie
}

const ModalIngredients: React.FC<ModalIngredientsProps> = ({ closeIngredientsModal, ingredientType, setIngredientType }) => {
    // Vérifier si ingredientType est une clé valide
    if (!(ingredientType in dataIngredients.ingredients)) {
        console.error(`Type d'ingrédient invalide: ${ingredientType}`);
        return null; // Retourner null ou tout autre élément indiquant une erreur
    }

    const ingredients: IngredientsData = dataIngredients.ingredients;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
                <div className={styles.modalTop}>
                    <div className={styles.filterAndGoldAndClose}>
                        <button className={styles.filter}>📖</button>
                        <span className={styles.gold}>-- 🪙 3226 --</span>
                        <button className={styles.close} onClick={closeIngredientsModal}>X</button>
                    </div>
                    <h2 className={styles.title}>💎 {ingredientType}</h2>
                    <div className={styles.category}>
                        <button className={styles.mineral} onClick={() => setIngredientType('mineral')}>💎</button>
                        <button className={styles.vegetal} onClick={() => setIngredientType('vegetal')}>🪻</button>
                        <button className={styles.animal} onClick={() => setIngredientType('animal')}>🦝</button>
                        <button className={styles.mushroom} onClick={() => setIngredientType('mushroom')}>🍄</button>
                    </div>
                </div>
                <div className={styles.modalMiddle}>
                    {Object.keys(ingredients[ingredientType]).map((ingredientName, index) => (
                        <div key={index} className={styles.ingredientCard}>
                            <h3>{ingredientName}</h3>
                            <p><span>Prix :</span> {ingredients[ingredientType][ingredientName].price}</p>
                            <p><span>Description :</span> {ingredients[ingredientType][ingredientName].description}</p>
                            <p><span>Rareté :</span> {ingredients[ingredientType][ingredientName].rarity}</p>
                        </div>
                    ))}
                    <div className={styles.scrollList}></div>
                </div>
                <div className={styles.modalBottom}>
                    <div className={styles.settingsAndCostAndNumberOfIngreients}>
                        <button className={styles.settings}>⚙️</button>
                        <div className={styles.cost}>💰 Coût : 🪙 236 </div>
                        <div className={styles.numberOfIngredients}>🌿 3</div>
                    </div>
                    <button className={styles.addButton}>✨ Mélanger ✨</button>
                </div>
            </div>
        </div>
    );
};

export default ModalIngredients;
