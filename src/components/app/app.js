import styles from "./app.module.css";
import Header from "../header";
import Sidebar from "../sidebar";
import InputPanel from "../input-panel";
import Counter from "../counter";
import TodoList from "../todo-list";

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.listContent}>
          <div className={styles.activeListContainer}>
            <InputPanel placeholder="add text" />
            <Counter count={9} />
            <TodoList counterText="To Do" todos={[]} />
          </div>
          <div className={styles.doneListContainer}>
            <TodoList counterText="Completed" isDone={true} todos={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
