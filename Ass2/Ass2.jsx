import { useState } from "react";
import "./tracker.css";
const getId = () => Date.now() + Math.random().toString(36).slice(2, 9);
export default function Trader() {
  
  let [task, setTask] = useState([{ ta: "20 DSA QUESTIONS", id: getId(), isdone: false }]);
  let [newTask, setNewTask] = useState("");
  let addTask = () => {
   if (!newTask.trim()) return;
    setTask([...task, { ta: newTask, id: getId(), isdone: false }]);
    setNewTask("");
  };
  let delTask = (id) => {
    setTask(task.filter((tasks) => tasks.id !== id));
  };

  let markAll = () => {
    setTask(task.map((tasks) => ({ ...tasks, isdone: true })))
  };

  let mark = (id) => {
    setTask(
      task.map((tasks) => {
        if (tasks.id === id) {
          return { ...tasks, isdone: true };
        } else {
          return tasks;
        }
      })
    );
  };
 return (
    <div className="container">
      <h1>Interview Preparation Tracker</h1>
      <hr />
      <h3>Add Task to Crack the interview</h3>
      <div className="input-row">
        <input
          placeholder="Enter Your Task"type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}/>
        <button type="button" className="add-btn" onClick={addTask}>Add a Task</button>
      </div>
      <hr />
      <ul>
        {task.map((tasks) => (
          <li key={tasks.id}>
            <span className={tasks.isdone ? 'task-done' : ''}>{tasks.ta}</span>
            <button type="button" className="done-btn" onClick={() => mark(tasks.id)} disabled={tasks.isdone}>
              {tasks.isdone ? 'Done' :'Mark as Done'}
            </button>
            <button type="button" className="delete-btn" onClick={() => delTask(tasks.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className="all-btn" onClick={markAll}>Mark All Done</button>
    </div>
  );
}