import styles from "./todo-list.module.css";
import TodoListItem from "../todo-list-item";
import TodoListItemDone from "../todo-list-item-done";
import LocalCounter from "../local-counter";

export default function TodoList({ todos, counterText, isDone }) {
  if (isDone) {
  }
  return (
    <div className={styles.listContainer}>
      <LocalCounter count={todos.length} textContent={counterText} />
      <div>
        {isDone
          ? todos.map((todo) => <TodoListItemDone key={todo.id} todo={todo} />)
          : todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
}
