import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import { IToDo } from './interfaces/IToDo';
import styles from './App.module.css';

const initialTodos: IToDo[] = [
  { id: 1, task: 'Выучить React', completed: false },
  { id: 2, task: 'Написать To-Do App', completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<IToDo[]>(initialTodos);

  const toggleToDo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const addTask = (task: string) => {
    const newTask = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTask]);
  };

  return (
    <div className={styles.app}>
      <h1>Мои задачи</h1>
      <AddToDoForm addTask={addTask} />
      <ToDoList todos={todos} toggleToDo={toggleToDo} />
    </div>
  );
};

export default App;
