import React, { useState } from "react";
import "./App.css"
const App=()=> {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="main">
      <div className="main1">
        <h1 className="p5">Task Tracker</h1>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask} className="b1">Add</button>
      <div className="">
        {tasks.map((t, index) => (
          <div key={index}>
            <div className="main2">
              <input type="checkbox"/>
              <p className="p5">{t.text}</p>
              
              <button onClick={() => deleteTask(index)} className="b6" >
               delete
              </button>
              </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
export default App