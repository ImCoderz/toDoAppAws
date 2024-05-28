import React, { useState } from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa'; // Import FaTrash icon

function DeleteToDo({ todoId, fetchTodos }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteToDo = async () => {
    setIsLoading(true);
    await fetch(`https://nmjjqc48k9.execute-api.us-east-1.amazonaws.com/prod/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
    setIsLoading(false);
    fetchTodos();
  };

  return (
    <button
      className={`p-2 w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-105 bg-red-500 hover:bg-red-600 text-white`}
      onClick={handleDeleteToDo}
      disabled={isLoading}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        <FaTrash /> 
      )}
    </button>
  );
}

export default DeleteToDo;
