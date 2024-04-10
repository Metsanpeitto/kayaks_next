import { CardProps } from "@/app/types";
import styles from "./style.module.css";

export default function Card(props: CardProps) {
  const { image, text, title } = props;
  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}></div>
      </div>
    </div>
  );
}
