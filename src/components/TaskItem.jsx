function TaskItem({ task, toggleTask, removeTask }) {
  return (
    <li className="py-3 group">
      <div className="flex items-center justify-between group-hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
        <div className="flex items-center flex-1 min-w-0">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
          />
          <span 
            className={`ml-3 text-gray-900 ${
              task.completed ? 'line-through text-gray-400' : ''
            } transition-all duration-200 truncate`}
          >
            {task.text}
          </span>
        </div>
        <button
          onClick={() => removeTask(task.id)}
          className="ml-2 text-gray-400 hover:text-red-600 transition duration-200 opacity-70 group-hover:opacity-100"
          aria-label="Delete task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TaskItem; 