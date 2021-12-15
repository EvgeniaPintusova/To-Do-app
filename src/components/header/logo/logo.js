import styles from "./logo.module.css";
import { ReactComponent as LogoIcon } from "../../../img/logo.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <LogoIcon />
    </div>
  );
}
