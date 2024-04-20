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
                <div className={styles.legLeft}></div>
                <div className={styles.legRight}></div>


                <div className={styles.apothecaryStorage}>
                    <button
                        className={styles.mineral}
                        onClick={() => openIngredientsModal(IngredientType.MINERAL)}
                    ><div className={styles.drawer}>
                            <div className={styles.label}>Mineral</div>
                            <div className={styles.handle}></div>
                        </div>

                    </button>
                    <button
                        className={styles.vegetal}
                        onClick={() => openIngredientsModal(IngredientType.VEGETAL)}
                    >
                        <div className={styles.drawer}>
                            <div className={styles.label}>Vegetal</div>
                            <div className={styles.handle}></div>
                        </div>
                    </button>
                    <button
                        className={styles.animal}
                        onClick={() => openIngredientsModal(IngredientType.ANIMAL)}
                    >
                        <div className={styles.drawer}>
                            <div className={styles.label}>Animal</div>
                            <div className={styles.handle}></div>
                        </div>
                    </button>
                    <button
                        className={styles.mushroom}
                        onClick={() => openIngredientsModal(IngredientType.MUSHROOM)}
                    >
                        <div className={styles.drawer}>
                            <div className={styles.label}>Mushroom</div>
                            <div className={styles.handle}></div>
                        </div>
                    </button>
                </div>
            </div>
            <div className={styles.feet}></div>
        </div>
    );
};

export default ApothecaryCabinetComponent;
