import React, { useState } from 'react';

function Task() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, task]);
    }

    const handleTaskChange = (e) => {
        setTask(e.currentTarget.value);
    }
  
    const taskList = tasks.map(t => <li>{t}</li>);
    
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