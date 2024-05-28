import React from 'react';
import { format } from 'date-fns';
import UpdateToDo from './UpdateToDo';
import CompleteToDo from './CompleteToDo';
import DeleteToDo from './DeleteToDo';

function ToDoItem({ todo, fetchTodos }) {
  // Format the date
  const formattedDate = format(new Date(todo.CreatedAt), 'MMMM do, yyyy h:mm a');

  return (
    <div className="flex sm:gap-0 gap-3 sm:flex-row flex-col sm:items-center items-start justify-between p-4 border-b hover:bg-gray-50 transition duration-300">
      <div>
        <h2 className={`text-xl font-semibold ${todo.IsComplete ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {todo.Title}
        </h2>
        <p className="text-gray-500 italic">{formattedDate}</p>
      </div>
      <div className='sm:hidden flex'>
        <UpdateToDo todo={todo} fetchTodos={fetchTodos} />
      </div>
      <div className="flex space-x-2">
        <CompleteToDo todo={todo} fetchTodos={fetchTodos} />
        <div className='sm:flex hidden'>
          <UpdateToDo todo={todo} fetchTodos={fetchTodos} />
        </div>
        <DeleteToDo todoId={todo.toDoId} fetchTodos={fetchTodos} /> {/* Include the DeleteToDo component */}
      </div>
    </div>
  );
}

export default ToDoItem;
