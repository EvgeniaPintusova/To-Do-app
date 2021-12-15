import styles from "./sidebar.module.css";
import Button from "../button";

export default function Sidebar() {
  return (
    <div className={styles.content}>
      <Button icon="menu" className={styles.menuBtn}/>
    </div>
  );
}
