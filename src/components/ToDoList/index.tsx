import React from 'react';
import ToDoItem from '../ToDoItem';
import styles from './ToDoList.module.css';
import ToDoListProps from '../../interfaces/ToDoListProps';

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleToDo }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleToDo={toggleToDo} />
      ))}
    </div>
  );
};

export default ToDoList;
