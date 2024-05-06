// marketModal.tsx
import React from "react";
import ingredientsData from "@/data/ingredients.json";
import styles from "./marketModal.module.scss";
import Image from "next/image";
import IngredientMarketComponent from "@/components/ingredientMarketComponent/IngredientMarketComponent";
import DetailsIngredientComponent from "@/components/detailsIngredientComponent/DetailsIngredientComponent";
import Ingredient from "@/OOP/IngredientClass";
import GoldComponent from "./components/GoldComponent";
import CharacterLevelComponent from "./components/CharacterLevelComponent";

enum IngredientRarity {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic"
}

interface IngredientI {
    name: string,
    description: string | IngredientRarity,
    rarity: string,
    imagePath: string,
    bonus: {
        name: string,
        magnitude: number
    },
    malus: {
        name: string,
        magnitude: number
    },
    min_price: number,
    max_price: number
}

interface IngredientData {
    ingredients: {
        [key: string]:
        IngredientI[]
    }
}
interface MarketModalProps {
    closeMarketModal: () => void;
}

const miscellaneousImages: { [key: string]: string } = {
    Filter: "/images/Miscellaneous/Filter.png",
    NbrOfIngr: "/images/Miscellaneous/Nbr_Of_Ingr.png",
    Cart: "/images/Miscellaneous/Cart.png",
    Gold: "/images/Miscellaneous/Gold.png",
};

const MarketModal: React.FC<MarketModalProps> = ({ closeMarketModal }) => {
    const data: IngredientData = ingredientsData;

    const [detailOpened, setDetailOpened] = React.useState<Ingredient | null>(null);

    React.useEffect(() => {
        console.log("State changed");
    }, [detailOpened])
        
    return (
        <>
            <div className={styles.marketModalOverlay}>
                <div className={styles.marketModalWindow}>

                    <section className={styles.modalTop}>
                        <div className={styles.filterAndGoldAndClose}>
                            <button className={styles.filter}>
                                {miscellaneousImages && <Image src={miscellaneousImages["Filter"]} alt={"Filter"} width={28} height={28} />}
                            </button>
                            <GoldComponent />
                            <h1 className={styles.title}>Apothecary Market</h1>
                            <CharacterLevelComponent />
                            <button className={styles.close} onClick={closeMarketModal}>X</button>
                        </div>
                    </section>


                    <section className={styles.modalMiddle}>
                        <DetailsIngredientComponent detailOpened={detailOpened} setDetailOpened={setDetailOpened}/>
                        <div>
                        {
                            Object.keys(data.ingredients).map((ingredientType: string) => (
                                Object.keys(data.ingredients[ingredientType]).map((ingredient: string) => (
                                    <IngredientMarketComponent

                                        setDetailOpened={setDetailOpened}

                                        img={data.ingredients[ingredientType][parseInt(ingredient)].imagePath}
                                        name={data.ingredients[ingredientType][parseInt(ingredient)].name}
                                        description={data.ingredients[ingredientType][parseInt(ingredient)].description}
                                        quantity={0}
                                        rarity={data.ingredients[ingredientType][parseInt(ingredient)].rarity}
                                        type={ingredientType}
                                        minPrice={data.ingredients[ingredientType][parseInt(ingredient)].min_price}
                                        maxPrice={data.ingredients[ingredientType][parseInt(ingredient)].max_price}
                                        key={crypto.randomUUID()} />
                                ))
                            ))
                        }
                        </div>
                    </section>

                    <section className={styles.modalBottom}>
                        <div className={styles.cartBanner}>
                            <div className={styles.nbrOfIngr}>
                                {miscellaneousImages && <Image src={miscellaneousImages["NbrOfIngr"]} alt={"Nbr Of Ingr"} width={15} height={20} />}
                                <p>Nbr of Ingr: <span>12</span></p>
                            </div>
                            <div className={styles.cart}>
                                {miscellaneousImages && <Image src={miscellaneousImages["Cart"]} alt={"Cart"} width={20} height={18} />}
                                <h3>CART ⬇</h3>
                            </div>
                            <div className={styles.gold}>
                                {miscellaneousImages && <Image src={miscellaneousImages["Gold"]} alt={"Gold"} width={18} height={18} />}
                                <p>Total: <span>1534</span></p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
};

export default MarketModal;
