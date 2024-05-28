import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('https://nmjjqc48k9.execute-api.us-east-1.amazonaws.com/prod/todos');
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ToDo App</h1>
      <AddToDo fetchTodos={fetchTodos} />
      <ToDoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
