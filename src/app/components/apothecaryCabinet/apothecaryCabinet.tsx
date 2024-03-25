// ApothecaryCabinet.tsx
import styles from "./apothecaryCabinet.module.scss";

interface ApothecaryCabinetProps {
    openIngredientsModal: () => void;
}

const ApothecaryCabinetComponent: React.FC<ApothecaryCabinetProps> = ({ openIngredientsModal }) => {
    return (
        <div className={styles.apothecaryCabinet}>
            <div className={styles.mineral} onClick={openIngredientsModal}></div>
            <div className={styles.vegetal} onClick={openIngredientsModal}></div>
            <div className={styles.animal} onClick={openIngredientsModal}></div>
            <div className={styles.mushroom} onClick={openIngredientsModal}></div>
        </div>
    );
};

export default ApothecaryCabinetComponent;
