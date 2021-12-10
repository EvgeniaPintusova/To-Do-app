import styles from "./todo-list-item.module.css";
import Button from "../button";

export default function TodoListItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div
      className={
        todo.completed
          ? styles.listItemContainer + " " + styles.completed
          : styles.listItemContainer
      }
    >
      <div>
        <input
          type="checkbox"
          id={todo.id}
          className={styles.checkboxStyle}
          onChange={toggleTodo}
          checked={todo.completed}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      {todo.completed ? (
        <div>
          <Button icon="delete" onClick={removeTodo} />
        </div>
      ) : (
        <div>
          <Button icon="edit" />
          <Button icon="copy" />
          <Button icon="delete" onClick={removeTodo} />
        </div>
      )}
    </div>
  );
}
