import React, { useState } from 'react';
import { json, Link } from 'react-router-dom';
import './Task.css';

function Task() {

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    );

    const [task, setTask] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, task]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
    }

    const handleTaskChange = (e) => {
        setTask(e.currentTarget.value);
    }

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  
    const taskList = tasks.map((t, index) =>
    <div key={index}>
      <Link to={`/task/${index}`}>
        <span className='task-item'>{t}</span>
      </Link>
      <button onClick={() => handleDeleteTask(index)}>Delete</button>
    </div>
  );

    return (
        <div className="task-container">
            <div>
                Enter Task: <input value={task} onChange={handleTaskChange}/>
                <br />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <ul>{taskList}</ul>

        </div>
    );
  }
  
  export default Task;