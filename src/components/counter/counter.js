import styles from "./counter.module.css";

export default function Counter({ count }) {
  return (
    <div className={styles.counter}>
      <p>Total: {count}</p>
    </div>
  );
}
