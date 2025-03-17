import React from "react";

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Your list is empty</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex items-center justify-between transition-all duration-300"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span
                className={`ml-3 text-gray-800 ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
