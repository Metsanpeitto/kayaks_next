//import Card from "./components/Card"
import styles from "./product.module.css";

export default async function AboutPage() {
  return (
    <div className={styles.page}>
      <h1>About</h1>
      <div className="frame">{/*<Card />*/}</div>
    </div>
  );
}
