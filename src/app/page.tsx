import styles from "./page.module.scss"

const Home = () => {
  return (
    <main>
      <div className={styles.homepage}>
        <div className={styles.title}> <h1>L&apos;APPRENTI ALCHIMISTE</h1>
          <p>Crée des potions farfelues</p></div>




        <div className={styles.mainMenu}></div>
      </div>


    </main>
  );
};

export default Home;