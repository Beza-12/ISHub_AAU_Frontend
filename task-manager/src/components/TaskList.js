// components/TaskList.js
import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../App';

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  // Set up timers to highlight tasks after 5 seconds
  useEffect(() => {
    const timers = state.tasks
      .filter(task => !task.completed && !task.highlighted)
      .map(task => {
        const timeSinceCreation = Date.now() - task.createdAt;
        const timeUntilHighlight = 5000 - timeSinceCreation;
        
        if (timeUntilHighlight <= 0) {
          // Highlight immediately if already past 5 seconds
          dispatch({ type: 'HIGHLIGHT_TASK', payload: task.id });
          return null;
        }
        
        // Set timeout for the remaining time
        return setTimeout(() => {
          dispatch({ type: 'HIGHLIGHT_TASK', payload: task.id });
        }, timeUntilHighlight);
      });

    // Clean up timers on unmount or when dependencies change
    return () => {
      timers.forEach(timer => timer && clearTimeout(timer));
    };
  }, [state.tasks, dispatch]);

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  if (state.tasks.length === 0) {
    return (
      <div className="task-list">
        <p className="no-tasks">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {state.tasks.map(task => (
        <div
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''} ${task.highlighted ? 'highlighted' : ''}`}
        >
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              className="task-checkbox"
            />
            <span className="task-text">{task.text}</span>
          </div>
          <button
            onClick={() => handleDelete(task.id)}
            className="delete-button"
            aria-label="Delete task"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;