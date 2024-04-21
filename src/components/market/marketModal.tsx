// marketModal.tsx
import ingredientsData from "@/data/ingredients.json";
import styles from "./marketModal.module.scss";
import IngredientMarketComponent from "@/components/ingredientMarketComponent/IngredientMarketComponent";

enum IngredientRarity {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic"
}

interface IngredientI {
    name: string,
    description: string | IngredientRarity,
    rarity: string,
    imagePath: string,
    bonus: {
        name: string,
        magnitude: number
    },
    malus: {
        name: string,
        magnitude: number
    },
    min_price: number,
    max_price: number
}

interface IngredientData {
    ingredients: {
        [key: string]:
        IngredientI[]
    }
}
interface MarketModalProps {
    closeMarketModal: () => void;
}


const MarketModal: React.FC<MarketModalProps> = ({ closeMarketModal }) => {
    const data: IngredientData = ingredientsData;
    return (
        <>
            <div className={styles.marketModalOverlay}>
                <div className={styles.marketModalWindow}>

                    <div className={styles.modalTop}>
                        <div className={styles.filterAndGoldAndClose}>
                            <button className={styles.filter}>📖</button>
                            <span className={styles.gold}>🪙 3226</span>
                            <h1 className={styles.title}>Apothecary Market</h1>
                            <span className={styles.lvl}>LV.4 ⬆</span>
                            <button className={styles.close} onClick={closeMarketModal}>X</button>
                        </div>
                    </div>


                    <div className={styles.modalMiddle}>
                        {
                            Object.keys(data.ingredients).map((ingredientType: string) => (
                                Object.keys(data.ingredients[ingredientType]).map((ingredient: string) => (
                                    <IngredientMarketComponent
                                        img={data.ingredients[ingredientType][parseInt(ingredient)].imagePath}
                                        name={data.ingredients[ingredientType][parseInt(ingredient)].name}
                                        quantity={20}
                                        rarity={data.ingredients[ingredientType][parseInt(ingredient)].rarity}
                                        type={ingredientType}
                                        minPrice={data.ingredients[ingredientType][parseInt(ingredient)].min_price}
                                        maxPrice={data.ingredients[ingredientType][parseInt(ingredient)].max_price}
                                        key={crypto.randomUUID()} />
                                ))
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default MarketModal;
