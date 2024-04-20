// marketModal.tsx
import styles from "./marketModal.module.scss";

interface MarketModalProps {
    closeMarketModal: () => void;
}

const MarketModal: React.FC<MarketModalProps> = ({ closeMarketModal }) => {
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

                    </div>

                </div>
            </div>
        </>
    );
};

export default MarketModal;
