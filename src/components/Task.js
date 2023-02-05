import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Task.css';

function Task() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, task]);
    }

    const handleTaskChange = (e) => {
        setTask(e.currentTarget.value);
    }
  
    const taskList = tasks.map((t, index) =>
        <Link to={`/task/${index}`}>
            <li className='task-item'>{t}</li>
        </Link>
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