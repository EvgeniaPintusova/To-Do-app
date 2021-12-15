import styles from "./todo-list-item.module.css";
import Button from "../button";

export default function TodoListItem({
  todo,
  toggleTodo,
  removeTodo,
  editTodo,
}) {
  
  const copyTodo = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("successfully copied");
      })
      .catch(() => {
        console.log("something wrong");
      });
  };

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
        <div className={styles.buttonsContainer}>
          <Button icon="edit" onClick={editTodo} />
          <Button icon="copy" onClick={() => copyTodo(todo.title)} />
          <Button icon="delete" onClick={removeTodo} />
        </div>
      )}
    </div>
  );
}
