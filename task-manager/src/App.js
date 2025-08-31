// App.js
import React, { useReducer, useEffect, createContext } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './App.css';

// Create context for global state
export const TaskContext = createContext();

// Initial state
const initialState = {
  tasks: []
};

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_TASKS':
      return { tasks: action.payload };
    case 'ADD_TASK':
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
        highlighted: false
      };
      return { tasks: [newTask, ...state.tasks] };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'HIGHLIGHT_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, highlighted: true }
            : task
        )
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch({ type: 'LOAD_TASKS', payload: savedTasks });
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <header className="app-header">
          <h1>Personal Task Manager</h1>
          <p>Stay organized with timed reminders</p>
        </header>
        <main className="app-main">
          <TaskInput />
          <TaskStats />
          <TaskList />
        </main>
      </div>
    </TaskContext.Provider>
  );
}

export default App;