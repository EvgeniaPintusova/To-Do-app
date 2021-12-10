import { useState } from "react";
import styles from "./app.module.css";
import Header from "../header";
import Sidebar from "../sidebar";
import InputPanel from "../input-panel";
import Counter from "../counter";
import TodoList from "../todo-list";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo) {
      const newTodo = {
        userId: 1,
        id: +new Date(),
        title: todo,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const editTodo = () => {};

  const handleToggle = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    const oldItem = todos[idx];
    const newItem = { ...oldItem, ["completed"]: !oldItem["completed"] };
    setTodos([...todos.slice(0, idx), ...todos.slice(idx + 1), newItem]);
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.listContent}>
          <div className={styles.activeListContainer}>
            <InputPanel
              placeholder="add text"
              addTodo={addTodo}
              editTodo={editTodo}
            />
            <Counter count={todos.length} />
            <TodoList
              counterText="To Do"
              todos={todos.filter((todo) => todo.completed === false)}
              handleToggle={handleToggle}
              removeTodo={removeTodo}
            />
          </div>
          <div className={styles.doneListContainer}>
            <TodoList
              counterText="Completed"
              todos={todos.filter((todo) => todo.completed === true)}
              handleToggle={handleToggle}
              removeTodo={removeTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
