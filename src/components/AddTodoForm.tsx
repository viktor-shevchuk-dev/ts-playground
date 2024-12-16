import { useState, FC, FormEvent, ChangeEvent } from 'react';

interface IAddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: FC<IAddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAdd(newTodo);
    setNewTodo('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(event.target.value);

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
