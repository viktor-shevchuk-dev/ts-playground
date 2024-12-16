// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';

import './App.css';

import { addTodo, deleteTodo } from './todoSlice';
import { RootState } from './store';

export interface Task {
  id: number;
  text: string;
}

function App() {
  // const [todos,  setTodos] = useState<Task[]>([]);
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  // const addTodo = (text: string) => {
  //   const newTodo = { id: Date.now(), text };
  //   setTodos((todos) => [...todos, newTodo]);
  // };

  // const deleteTodo = (id: number) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={(id) => dispatch(deleteTodo(id))}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
