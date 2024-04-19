// marketBtn.tsx
import React from "react";
import styles from "./marketBtn.module.scss";


interface MarketModaleProps {
    openMarketModal: () => void
}

const MarketBtn: React.FC<MarketModaleProps> = ({ openMarketModal }) => {
    return (
        <>
            <button
                className={styles.marketBtn}
                onClick={() => openMarketModal()}>🧺</button>
        </>
    )
}
export default MarketBtn;