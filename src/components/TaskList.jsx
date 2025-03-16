import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <ul className="divide-y divide-gray-200">
      <TransitionGroup>
        {tasks.map(task => (
          <CSSTransition
            key={task.id}
            timeout={300}
            classNames="task"
          >
            <TaskItem 
              task={task} 
              toggleTask={toggleTask} 
              removeTask={removeTask} 
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      
      {tasks.length === 0 && (
        <li className="py-4 text-center text-gray-500 italic">
          No tasks to display
        </li>
      )}
    </ul>
  );
}

export default TaskList; 