// ApothecaryCabinet.tsx
import styles from "./apothecaryCabinet.module.scss";

interface ApothecaryCabinetProps {
    openIngredientsModal: (ingredientType: string) => void;
}

const ApothecaryCabinetComponent: React.FC<ApothecaryCabinetProps> = ({ openIngredientsModal }) => {
    return (
        <div className={styles.apothecaryCabinet}>
            <button className={styles.mineral} onClick={() => openIngredientsModal('mineral')}>Minéral</button>
            <button className={styles.vegetal} onClick={() => openIngredientsModal('vegetal')}>Végétal</button>
            <button className={styles.animal} onClick={() => openIngredientsModal('animal')}>Animal</button>
            <button className={styles.mushroom} onClick={() => openIngredientsModal('mushroom')}>Champignon</button>
        </div>
    );
};

export default ApothecaryCabinetComponent;