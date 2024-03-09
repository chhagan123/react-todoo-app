import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems,onDeletClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item,index) => (
        <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} onDeletClick={onDeletClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;