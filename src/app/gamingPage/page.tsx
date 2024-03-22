import styles from "./page.module.scss"
import ApothecaryCabinetComponent from "../components/apothecaryCabinet"

const MainPage = () => {
    return (
        <>
            <div className={styles.gamingPage}>
                <h1>Page du jeu en cours</h1>
                <p>Ceci est un composant typescript.</p>

                <span>➡️ N&apos;hésite pas à me prodiguer tes conseils Karlito</span>
            </div>
            <ApothecaryCabinetComponent />
        </>
    );
};

export default MainPage;