import styles from "./todo-list.module.css";
import TodoListItem from "../todo-list-item";
import LocalCounter from "../local-counter";

export default function TodoList({
  todos,
  counterText,
  handleToggle,
  removeTodo,
  editTodo,
}) {
  return (
    <div className={styles.listContainer}>
      <LocalCounter count={todos.length} textContent={counterText} />
      <div>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={() => handleToggle(todo.id)}
            removeTodo={() => removeTodo(todo.id)}
            editTodo={() => editTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}
