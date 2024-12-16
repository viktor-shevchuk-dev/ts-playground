import { useState } from 'react';

import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';

import './App.css';

export interface Task {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </>
  );
}

export default App;
