import { FrameProps } from "@/app/types";
import styles from "./styles.module.css"

export default function Frame(props: FrameProps) {
  const {frameTitle} = props
  return (
    <div className={styles.frame}>
      <h2 className={styles.frameTitle}>{frameTitle}</h2>
      <div className={styles.frameCards}></div>
    </div>
  );
}
