import styles from "./apothecaryCabinet.module.scss"

const ApothecaryCabinetComponent = () => {
    return (
        <>
            <div className={styles.apothecaryCabinet}>
                <div className={styles.mineral}></div>
                <div className={styles.vegetal}></div>
                <div className={styles.animal}></div>
                <div className={styles.mushroom}></div>
            </div>
        </>
    );
};

export default ApothecaryCabinetComponent;