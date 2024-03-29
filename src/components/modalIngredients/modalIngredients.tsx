"use client"

import React from "react";
import dataIngredients from "@/data/ingredientsEN.json"
import styles from "./modalIngredients.module.scss";
import { useIngredient } from "@/Provider/IngredientContext";
import Ingredient, { IngredientType, parseIngredientRarity } from "@/OOP/IngredientClass";
import { toast } from "react-toastify";

interface IIngredient {
    price: number;
    description: string;
    rarity: string;
    bonus: { id: string; magnitude: number };
    malus: { id: string; magnitude: number };
}

interface IngredientsData {
    [key: string]: { [key: string]: IIngredient };
}

interface ModalIngredientsProps {
    closeIngredientsModal: () => void;
    ingredientType: IngredientType;
    setIngredientType: (type: IngredientType) => void; // Ajout de la fonction pour définir la catégorie
}

const ModalIngredients: React.FC<ModalIngredientsProps> = ({ closeIngredientsModal, ingredientType, setIngredientType }) => {
    // Vérifier si ingredientType est une clé valide
    // if (!(ingredientType in dataIngredients.ingredients)) {
    //     console.error(`Type d'ingrédient invalide: ${ingredientType}`);
    //     return null; // Retourner null ou tout autre élément indiquant une erreur
    // }

    const { ingredients, addIngredient } = useIngredient();
    const ingredientsData: IngredientsData = dataIngredients.ingredients;

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
                        <button className={styles.mineral} onClick={() => setIngredientType(IngredientType.MINERAL)}>💎</button>
                        <button className={styles.vegetal} onClick={() => setIngredientType(IngredientType.VEGETAL)}>🪻</button>
                        <button className={styles.animal} onClick={() => setIngredientType(IngredientType.ANIMAL)}>🦝</button>
                        <button className={styles.mushroom} onClick={() => setIngredientType(IngredientType.MUSHROOM)}>🍄</button>
                    </div>
                </div>



                <div className={styles.modalMiddle}>
                    {Object.keys(ingredientsData[ingredientType]).map((ingredientName, index) => (
                        <div key={index} className={styles.ingredientCard} onClick={() => {
                            if (ingredients.length < 3) {
                                addIngredient(new Ingredient(ingredientName, ingredientsData[ingredientType][ingredientName].price, 1, ingredientType, parseIngredientRarity(ingredientsData[ingredientType][ingredientName].rarity)));
                            }else {
                                toast.error("Vous ne pouvez pas ajouter plus de 3 ingrédients");
                            }
                        }}>
                            <h3><span>🍁</span>{ingredientName}</h3>
                            <p><span>Prix :</span> {ingredientsData[ingredientType][ingredientName].price}</p>
                            <p><span>Description :</span> {ingredientsData[ingredientType][ingredientName].description}</p>
                            <p><span>Rareté :</span> {ingredientsData[ingredientType][ingredientName].rarity}</p>
                        </div>
                    ))}
                    <div className={styles.scrollList}></div>
                </div>



                <div className={styles.modalBottom}>
                    <div className={styles.selectionCardsContainer}>
                        <h3>{"Selection d'ingrédients"}</h3>


                        
                        {/* <div className={`${styles.selectionCard} ${styles.selectionCard1}`}>
                            <div className={styles.selectionCardCategory}>💎</div>
                            <div className={styles.selectionCardDetails}>
                                <h4>🪨 Pyrite</h4>
                                <div className={styles.selectionCardDetailsPriceAndRarety}>
                                    <div className={styles.price}>Prix : 🪙 15 </div>
                                    <div className={styles.rerety}>Rareté : rare</div>
                                </div>
                                <button className={styles.closeSelectionButton}>X</button>
                            </div>
                        </div>
                        <div className={`${styles.selectionCard} ${styles.selectionCard2}`}>
                            <div className={styles.selectionCardCategory}>🪻</div>
                            <div className={styles.selectionCardDetails}>
                                <h4>🌿 Romarin</h4>
                                <div className={styles.selectionCardDetailsPriceAndRarety}>
                                    <div className={styles.price}>Prix : 🪙 3 </div>
                                    <div className={styles.rerety}>Rareté : commun</div>
                                </div>
                                <button className={styles.closeSelectionButton}>X</button>
                            </div>
                        </div>
                        <div className={`${styles.selectionCard} ${styles.selectionCard3}`}>
                            <div className={styles.selectionCardCategory}>3</div>
                            <div className={styles.selectionCardDetails}>
                                <h4>Vide</h4>
                                <div className={styles.selectionCardDetailsPriceAndRarety}>
                                    <div className={styles.price}></div>
                                    <div className={styles.rerety}></div>
                                </div>
                            </div>
                        </div> */}
                        <div className={styles.cost}>💰 Coût total : 🪙 18 </div>
                    </div>
                    <button className={styles.addButton}>✨ Mélanger ✨</button>
                </div>
            </div>
        </div>
    );
};

export default ModalIngredients;
