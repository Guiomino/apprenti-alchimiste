// ApothecaryCabinet.tsx
import { IngredientType } from "@/OOP/IngredientClass";
import styles from "./apothecaryCabinet.module.scss";

interface ApothecaryCabinetProps {
    openIngredientsModal: (ingredientType: IngredientType) => void;
}

const ApothecaryCabinetComponent: React.FC<ApothecaryCabinetProps> = ({
    openIngredientsModal,
}) => {
    return (
        <div className={styles.apothecaryContainer}>
            <div className={styles.apothecaryTable}></div>
            <div className={styles.apothecaryCabinet}>
                <button
                    className={styles.mineral}
                    onClick={() => openIngredientsModal(IngredientType.MINERAL)}
                >
                    Minéral
                </button>
                <button
                    className={styles.vegetal}
                    onClick={() => openIngredientsModal(IngredientType.VEGETAL)}
                >
                    Végétal
                </button>
                <button
                    className={styles.animal}
                    onClick={() => openIngredientsModal(IngredientType.ANIMAL)}
                >
                    Animal
                </button>
                <button
                    className={styles.mushroom}
                    onClick={() => openIngredientsModal(IngredientType.MUSHROOM)}
                >
                    Champignon
                </button>
            </div>
        </div>
    );
};

export default ApothecaryCabinetComponent;
