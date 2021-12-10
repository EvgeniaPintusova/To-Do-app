import styles from "./todo-list-item.module.css";
import Button from "../button";

export default function TodoListItem({ todo }) {
  return (
    <div className={styles.listItemContainer}>
      <div>
        <input type="checkbox" id={todo.id} className={styles.checkboxStyle}/>
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>

      <div>
        <Button icon="edit" />
        <Button icon="copy" />
        <Button icon="delete" />
      </div>
    </div>
  );
}
