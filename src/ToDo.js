import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState(["Walk dog", "Make lunch"]);
  const handleDeleteTask = (taskToRemove) => {
    setTasks(tasks.filter(task => (
      task !== taskToRemove
    )))
  }
  const [taskToAdd, setTaskToAdd] = useState("");
  const handleChange = (event) => {
    setTaskToAdd(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskToAdd) {
      tasks.push(taskToAdd);
      setTasks(tasks);
      setTaskToAdd("");
    }
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Task
          <input type="text" placeholder="Enter task" value={taskToAdd} onChange={handleChange}></input>
        </label>
        <input type="submit"></input>
      </form>
      <ul>
        {tasks.map(task => (
          <li>{task}<button onClick={()=>handleDeleteTask(task)}>Delete</button></li>
        ))}
      </ul>
      
    </div>
  )

}

export default ToDo;