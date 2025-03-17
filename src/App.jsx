import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // Initialize state with a function to check localStorage first
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {     
        return JSON.parse(savedTasks);  
    }
    else{
      return [];
    }
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  // Toggle task completion status
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-8 w-screen">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="px-6 py-6">
          <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
            Simple To-Do List
          </h1>

          <TaskForm addTask={addTask} />

          <div className="max-h-[350px] overflow-y-auto pr-2">
            <TaskList
              tasks={tasks}
              toggleTask={toggleTask}
              removeTask={removeTask}
            />
          </div>

          <div className="mt-6 text-sm text-gray-600 text-center font-medium">
            {tasks.length > 0 ? (
              <p>
                {tasks.filter((task) => task.completed).length} completed out of{" "}
                {tasks.length} tasks
              </p>
            ) : (
              <p>No tasks yet. Add one above!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
