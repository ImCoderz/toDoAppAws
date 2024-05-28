import React, { useState } from 'react';
import { FaSpinner, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

function UpdateToDo({ todo, fetchTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.Title);
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const handleUpdate = async () => {
    setIsLoading(true);
    // Perform update only if there are changes
    if (hasChanges) {
      await fetch(`https://nmjjqc48k9.execute-api.us-east-1.amazonaws.com/prod/todos/${todo.toDoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ Title: title, IsComplete: todo.IsComplete }),
      });
    }
    setIsLoading(false);
    setHasChanges(false);
    setIsEditing(false);
    fetchTodos();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // Check if the title has been changed
    if (e.target.value !== todo.Title) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="border rounded p-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          {hasChanges ? (
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-105 bg-blue-500 hover:bg-blue-600 text-white"
            >
              {isLoading ? <FaSpinner className="animate-spin" /> : <FaCheck />}
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-105 bg-red-500 hover:bg-red-600 text-white"
            >
              <FaTimes />
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-105 bg-blue-500 hover:bg-blue-600 text-white"
        >
          <FaEdit />
        </button>
      )}
    </div>
  );
}

export default UpdateToDo;
