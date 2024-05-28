import React, { useState } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';

function AddToDo({ fetchTodos }) {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToDo = async () => {
    setIsLoading(true);
    await fetch('https://nmjjqc48k9.execute-api.us-east-1.amazonaws.com/prod/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Title: title }),
    });
    setIsLoading(false);
    setTitle('');
    fetchTodos();
  };

  const isInputEmpty = title.trim() === '';

  return (
    <div className="mb-4 flex items-center">
      <input
        type="text"
        className="border p-2 mr-2 rounded-l focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new ToDo"
      />
      <button
        className={`bg-blue-500 text-white p-3 rounded flex items-center justify-center transition duration-300 ease-in-out ${isLoading || isInputEmpty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 hover:text-gray-100'}`}
        onClick={handleAddToDo}
        disabled={isLoading || isInputEmpty}
      >
        {isLoading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
      </button>
    </div>
  );
}

export default AddToDo;
