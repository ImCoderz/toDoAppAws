import React, { useState } from 'react';
import { FaSpinner, FaThumbsUp, FaRedo } from 'react-icons/fa';

function CompleteToDo({ todo, fetchTodos }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCompleteToDo = async () => {
    setIsLoading(true);
    await fetch(`https://nmjjqc48k9.execute-api.us-east-1.amazonaws.com/prod/todos/${todo.toDoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ IsComplete: !todo.IsComplete }),
    });
    setIsLoading(false);
    fetchTodos();
  };

  return (
    <button
      className={`p-2 w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${todo.IsComplete ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
      onClick={handleCompleteToDo}
      disabled={isLoading}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        todo.IsComplete ? <FaRedo /> : <FaThumbsUp />
      )}
    </button>
  );
}

export default CompleteToDo;
