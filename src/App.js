import Navbar from "./Navbar";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Clean Floors"
    },
    { 
      id: 1,
      text: "Bring in washing"
    },
    {
      id: 2,
      text: "Eat dinner"
    },
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="home">
          <AddTask onAdd={addTask} />
          <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
