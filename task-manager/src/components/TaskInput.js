// components/TaskInput.js
import React, { useState, useRef, useContext } from 'react';
import { TaskContext } from '../App';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const inputRef = useRef(null);
  const { dispatch } = useContext(TaskContext);

  // Focus input on component mount
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
      // Refocus input after adding task
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task..."
        className="task-input-field"
      />
      <button type="submit" className="task-input-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;