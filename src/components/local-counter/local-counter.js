import styles from "./local-counter.module.css";

export default function LocalCounter({ textContent, count }) {
  return (
    <div className={styles.textBold}>
        {textContent} ({count})
    </div>
  );
}
