import styles from "./input-panel.module.css";
import Button from "../button";

export default function InputPanel({ placeholder }) {
  return (
    <form className={styles.container}>
      <input className={styles.input} placeholder={placeholder} type="text" />
      <Button className={styles.addBtn} textContent="add" />
    </form>
  );
}
