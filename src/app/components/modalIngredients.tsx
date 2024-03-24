import styles from "./modalIngredients.module.scss"
const ModalIngredients = () => {
    return (
        <>
            <div className={styles.modalOverlay}>
                <div className={styles.modalWindow}>


                    <div className={styles.modalTop}>
                        <div className={styles.filterAndGoldAndClose}>
                            <button className={styles.filter}>Filtre</button>
                            <span className={styles.gold}>-- 🪙 3226 --</span>
                            <button className={styles.close}>X</button>
                        </div>
                        <h2 className={styles.title}>💎 MINERAL</h2>
                        <div className={styles.category}>
                            <button className={styles.mineral}>💎</button>
                            <button className={styles.vegetal}>🪻</button>
                            <button className={styles.animal}>🦝</button>
                            <button className={styles.mushroom}>🍄</button>
                        </div>
                    </div>


                    <div className={styles.modalMiddle}>
                        <div className={styles.ingredientCard}></div>
                        <div className={styles.scrollList}></div>
                    </div>


                    <div className={styles.modalBottom}>
                        <div className={styles.costAndNumberOfIngreients}>
                            <div className={styles.cost}></div>
                            <div className={styles.numberOfIngredients}></div>
                        </div>
                        <div className={styles.addButton}></div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ModalIngredients;