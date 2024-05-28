import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, fetchTodos }) {
  return (
    <div>
      {todos.map(todo => (
        <ToDoItem key={todo.toDoId} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </div>
  );
}

export default ToDoList;
