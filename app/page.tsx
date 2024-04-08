import Image from "next/image";
import heroImage from "./hero-image.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={heroImage}
        width={500}
        height={500}
        alt="Picture of the author"
        className={styles.heroImage}
      />
    </main>
  );
}
