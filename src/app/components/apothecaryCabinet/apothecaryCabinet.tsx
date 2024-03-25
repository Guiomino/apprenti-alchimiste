// ApothecaryCabinet.tsx
import styles from "./apothecaryCabinet.module.scss";

interface ApothecaryCabinetProps {
    openIngredientsModal: () => void;
}

const ApothecaryCabinetComponent: React.FC<ApothecaryCabinetProps> = ({ openIngredientsModal }) => {
    return (
        <div className={styles.apothecaryCabinet}>
            <button className={styles.mineral} onClick={openIngredientsModal}>Mineral</button>
            <button className={styles.vegetal} onClick={openIngredientsModal}>Vegetal</button>
            <button className={styles.animal} onClick={openIngredientsModal}>Animal</button>
            <button className={styles.mushroom} onClick={openIngredientsModal}>Mushroom</button>
        </div>
    );
};

export default ApothecaryCabinetComponent;
