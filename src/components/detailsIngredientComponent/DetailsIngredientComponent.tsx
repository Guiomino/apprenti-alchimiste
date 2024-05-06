// DetailsIngredient.tsx

import Ingredient from "@/OOP/IngredientClass";
import styles from "./detailsIngredientComponent.module.scss";

const DetailsIngredientComponent = ({
    detailOpened, setDetailOpened
}: { detailOpened: Ingredient | null, setDetailOpened: (type: Ingredient | null) => void }) => {
    return (
        <>
            <section className={`${detailOpened !== null ? styles.active : styles.detailsIngredientOverlay}`}>
                <div className={styles.detailsIngredientWindow}>
                    <div className={styles.top}>
                        <div>
                            <img src="images/Vegetals/Aromine.png" alt="Aromine" />
                            {/* {imageSrc && <Image src={imageSrc} alt="test" height={70} />} */}
                        </div>
                        <h2>{detailOpened?.getIngredientName()}</h2>
                        <button onClick={() => setDetailOpened(null)}>X</button>
                    </div>


                    <div className={styles.middle}>
                        <div className={`${styles.rarityAndType} ${styles.rarityAndTypeBorder}`}>
                            <div className={styles.star}>
                                <img src="images/Miscellaneous/Star_Common.png" alt="Star" />
                            </div>
                            <p><span>Rarity : </span>{detailOpened?.getIngredientRarity()}</p>
                        </div>
                        <div className={styles.rarityAndType}>
                            <div className={styles.type}>
                                <img src="images/Type_Vegetal.svg" alt="Vegetal" />
                            </div>

                            <p><span>Type : </span>{detailOpened?.getIngredientType()}</p>
                        </div>
                    </div>


                    <div className={styles.bottom}>
                        <div className={styles.priceAndStock}>
                            <div className={styles.price}>
                                <p><span>Price : </span></p>
                                <p><img src="images/Miscellaneous/Gold.png" alt="" /> 140</p>
                            </div>
                            <div className={styles.stock}>
                                <p><span>Stock : </span></p>
                                <p><img src="images/Miscellaneous/Cart.png" alt="" /> 2</p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p><span>Description : </span>{detailOpened?.getIngredientDescription()}</p>
                        </div>

                        <div className={styles.bonusMalus}>
                            <div className={styles.bonus}>
                                <p><span>Bonus :</span></p>
                                <div className={styles.steps}>
                                    <div className={styles.steps1}>
                                        <div className={`${styles.badge} ${styles.badge1}`}>1</div>
                                        <p className={`${styles.hidden} ${styles.revealed}`}><span>+20 pts</span> concentration</p>
                                    </div>
                                    <div className={styles.steps2}>
                                        <div className={`${styles.badge} ${styles.badge2}`}>2</div>
                                        <p className={`${styles.revealed} ${styles.hidden}`}><span></span>Use this ingredient 3 more times to reveal</p>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.malus}>
                                <p><span>Malus :</span></p>
                                <div className={styles.steps}>
                                    <div className={styles.steps1}>
                                        <div className={`${styles.badge} ${styles.badge1}`}>1</div>
                                        <p className={`${styles.revealed} ${styles.hidden}`}><span>-15 pts</span> intellectual efficiency</p>
                                    </div>
                                    <div className={styles.steps2}>
                                        <div className={`${styles.badge} ${styles.badge2}`}>2</div>
                                        <p className={`${styles.revealed} ${styles.hidden}`}><span></span>Use this ingredient 5 more times to reveal</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailsIngredientComponent;