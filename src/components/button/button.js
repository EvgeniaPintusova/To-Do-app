import styles from "./button.module.css";
import { ReactComponent as CopyIcon } from "../../img/copy-icon.svg";
import { ReactComponent as DeleteIcon } from "../../img/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../img/edit-icon.svg";
import { ReactComponent as MenuIcon } from "../../img/menu-icon.svg";
import { ReactComponent as DownIcon } from "../../img/down-icon.svg";

const icons = {
  copy: CopyIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  menu: MenuIcon,
  down: DownIcon,
};

const Button = ({ icon, textContent, ...props }) => {
  const Icon = icons[icon];
  return (
    <button className={styles.button} {...props}>
      <span>{textContent}</span>
      {Icon && <Icon />}
    </button>
  );
};
export default Button;
