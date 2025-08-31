// components/TaskStats.js
import React, { useContext } from 'react';
import { TaskContext } from '../App';

const TaskStats = () => {
  const { state } = useContext(TaskContext);
  
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const highlightedTasks = state.tasks.filter(task => task.highlighted && !task.completed).length;

  return (
    <div className="task-stats">
      <div className="stat-item">
        <span className="stat-number">{totalTasks}</span>
        <span className="stat-label">Total Tasks</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{pendingTasks}</span>
        <span className="stat-label">Pending</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{completedTasks}</span>
        <span className="stat-label">Completed</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{highlightedTasks}</span>
        <span className="stat-label">Need Attention</span>
      </div>
    </div>
  );
};

export default TaskStats;