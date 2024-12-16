import { FC } from 'react';

import { Task } from '../App';

interface ITodoItemProps {
  todo: Task;
  onDelete: (id: number) => void;
}

const TodoItem: FC<ITodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
