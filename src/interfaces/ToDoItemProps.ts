import { IToDo } from './IToDo';

export default interface ToDoItemProps {
  todo: IToDo;
  toggleToDo: (id: number) => void;
}
