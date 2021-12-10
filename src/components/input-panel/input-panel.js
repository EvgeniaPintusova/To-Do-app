import styles from "./input-panel.module.css";
import Button from "../button";
import { useState } from "react";

export default function InputPanel({ placeholder, addTodo, editTodo }) {
  const [todoItem, setTodoItem] = useState("");
  const handleChange = (e) => {
    setTodoItem(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoItem);
    setTodoItem("");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type="text"
        value={todoItem}
        onChange={handleChange}
      />
      <Button className={styles.addBtn} textContent="add" />
    </form>
  );
}
