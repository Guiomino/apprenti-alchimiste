'use client'

import Image from "next/image";
import styles from "./page.module.scss"
import { useRouter } from "next/navigation";


const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.homepage}>

      <div className={styles.backgroundImage}>
        <Image src="/images/MainPage-Background.webp" alt="Main page background" width={2560} height={1440} />
      </div>


      <div className={styles.mainMenu}>
        <div className={styles.logo}>
          <Image src="/images/Logo.png" alt="Main page logo" width={626} height={716} />
        </div>
        <div className={styles.btnContainer}>

          {/* <label htmlFor="nom">ENTRE TON NOM</label>
          <input type="text" id="nom" /> */}

          <button>ENTRE TON NOM</button>
          <button type="button" onClick={() => router.push('/gamingPage')}>NOUVELLE PARTIE</button>
          <button>CONTINUER</button>
          <button>QUITTER</button>
        </div>
      </div>

    </div>
  );
};

export default Home;
