import classnames from "classnames";
//import Card from "./components/Card"
import productStyles from "./product.module.css";
import globalStyles from "../page.module.css";

const styles = { ...productStyles, ...globalStyles };

export default async function ProductPage() {
  return (
    <div className={styles.page}>
      <h1 className="">Products</h1>
      <div className="frame">
        {/*<Card />
        <Card />*/}
      </div>
    </div>
  );
}
