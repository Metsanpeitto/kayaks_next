import Image from "next/image";
import "../global.css";
import styles from "./page.module.css";
import heroImage from "./hero-image.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Image
          src={heroImage}
          width={500}
          height={500}
          alt="Picture of the author"
          className={styles.heroImage}
        />
      </div>
    </main>
  );
}
