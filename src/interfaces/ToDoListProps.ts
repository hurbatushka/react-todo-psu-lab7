import { IToDo } from './IToDo';

export default interface ToDoListProps {
  todos: IToDo[];
  toggleToDo: (id: number) => void;
}
