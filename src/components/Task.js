import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Task.css';

function Task() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  const [task, setTask] = useState('');

  const [taskStatus, setTaskStatus] = useState(
    JSON.parse(localStorage.getItem('taskStatus')) || {}
  );

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));

     // Set the default task status for the new task
    setTaskStatus({ ...taskStatus, [tasks.length]: '' });
    localStorage.setItem(
    'taskStatus',
    JSON.stringify({ ...taskStatus, [tasks.length]: '' })
  );
};
  

  const handleTaskChange = (e) => {
    setTask(e.currentTarget.value);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleStartTask = (index) => {
    setTaskStatus({ ...taskStatus, [index]: "In Progress" });
    localStorage.setItem(
      'taskStatus',
      JSON.stringify({ ...taskStatus, [index]: "In Progress" })
    );
    localStorage.setItem('selectedTask', JSON.stringify(index));
  };

  

  const taskList = tasks.map((t, index) => (
    <div className="task-item" key={index}>
      <span>{t}</span>
      <span>{taskStatus[index] ? `*${taskStatus[index]}*` : ""}</span>
      <Link to={`/task/${index}`} onClick={() => handleStartTask(index)}>
        <button>View Task</button>
      </Link>
      <button onClick={() => handleDeleteTask(index)}>Delete</button>
    </div>
  ));
  

   return (
    <div className="task-container">
      <div>
        Enter Task: <input value={task} onChange={handleTaskChange} />
        <br />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>{taskList}</ul>
    </div>
  );
   };

export default Task;

