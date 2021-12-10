import styles from "./todo-list-item-done.module.css";
import Button from "../button";

export default function TodoListItemDone({ todo }) {
  return (
    <div className={styles.listItemContainer}>
      <div>
        <input type="checkbox" id={todo.id} className={styles.checkboxStyle} checked/>
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>

      <div>
        <Button icon="delete" />
      </div>
    </div>
  );
}
