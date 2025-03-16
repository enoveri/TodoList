import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add a new task
  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      }
      setTasks([...tasks, newTask])
    }
  }

  // Toggle task completion status
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  // Remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all' filter
  })

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            To-Do List
          </h1>
          
          <TaskForm addTask={addTask} />
          
          <FilterButtons filter={filter} setFilter={setFilter} />
          
          <TaskList 
            tasks={filteredTasks} 
            toggleTask={toggleTask} 
            removeTask={removeTask} 
          />
          
          <div className="mt-4 text-sm text-gray-500 text-center">
            {tasks.length > 0 ? (
              <p>{tasks.filter(task => task.completed).length} completed out of {tasks.length} tasks</p>
            ) : (
              <p>No tasks yet. Add one above!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
