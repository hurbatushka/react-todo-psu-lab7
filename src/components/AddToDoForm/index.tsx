import React, { useState } from 'react';
import styles from './AddToDoForm.module.css';
import AddToDoFormProps from '../../interfaces/AddToDoFormProps';

const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={styles.input}
        placeholder="Добавьте задачу..."
      />
      <button type="submit" className={styles.button}>
        Добавить
      </button>
    </form>
  );
};

export default AddToDoForm;
