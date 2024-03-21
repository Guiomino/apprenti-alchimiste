import styles from "./page.module.scss"

const mainPage = () => {
    return (
        <main>
            <div className={styles.test}>
                <h1>Test Typescript</h1>
                <p>Ceci est un composant typescript.</p>
            </div>
        </main>
    );
};

export default mainPage;