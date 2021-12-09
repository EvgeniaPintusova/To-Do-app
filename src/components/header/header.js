import styles from "./header.module.css";
import Logo from "./logo";
import User from "./user";

export default function Header() {
  const user_active = "Zheniya";
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {" "}
        <Logo />
        <p className={styles.title}>Tasks</p>
      </div>

      <User userName={user_active} />
    </div>
  );
}
