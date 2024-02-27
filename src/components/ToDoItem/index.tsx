import React from 'react';
import styles from './ToDoItem.module.css';
import ToDoItemProps from '../../interfaces/ToDoItemProps';

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, toggleToDo }) => {
  return (
    <div className={styles.todoItem}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleToDo(todo.id)} />
      <span className={todo.completed ? styles.completed : ''}>{todo.task}</span>
    </div>
  );
};

export default ToDoItem;
