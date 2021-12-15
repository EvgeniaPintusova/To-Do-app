import { useState, useEffect } from "react";
import styles from "./app.module.css";
import Header from "../header";
import Sidebar from "../sidebar";
import InputPanel from "../input-panel";
import Counter from "../counter";
import TodoList from "../todo-list";
import TodoService from "../../model/todo-service";

export default function App() {
  const todoService = new TodoService();
  const [todos, setTodos] = useState([]);
  const [toggleInput, setToggleInput] = useState(false);
  const [editID, setEditID] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    todoService.getTodos().then(
      (result) => {
        setTodos(result.slice(0, 20)); //slice() just for fewer items
      },
      (error) => {
        setErrors([...errors, error]);
      }
    );
  }, [errors]);

  const addTodo = (todo) => {
    if (todo) {
      const newTodo = {
        userId: 1,
        id: +new Date(),
        title: todo,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const saveTodo = (todo) => {
    if (todo) {
      const idx = todos.findIndex((el) => el.id === editID);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, ["title"]: todo };
      setTodos([...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]);
      setToggleInput(false);
    }
  };

  const editTodo = (id) => {
    setToggleInput(true);
    setEditID(id);
  };

  const handleToggle = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    const oldItem = todos[idx];
    const newItem = { ...oldItem, ["completed"]: !oldItem["completed"] };
    setTodos([...todos.slice(0, idx), ...todos.slice(idx + 1), newItem]);
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    setToggleInput(false);
  };

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.listContent}>
          <div className={styles.activeListContainer}>
            <InputPanel
              placeholder={
                toggleInput ? "Edit the task" : "+ Add a task, press Enter to save"
              }
              buttonContent={toggleInput ? "save" : "add"}
              changeTodo={toggleInput ? saveTodo : addTodo}
            />

            <Counter count={todos.length} />
            <TodoList
              counterText="To Do"
              todos={todos.filter((todo) => todo.completed === false)}
              handleToggle={handleToggle}
              removeTodo={removeTodo}
              editTodo={editTodo}
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
