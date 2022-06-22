import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : "Doctor's appointment",
        day : "Feb 5th at 02:30pm",
        reminder : true,
    },
    {
        id : 2,
        text : "Meeting at school",
        day : "Feb 6th at 01:30pm",
        reminder : true,
    },
    {
        id : 3,
        text : "Food shopping",
        day : "Feb 5th at 02:30pm",
        reminder : false,
    },
])

// add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

// toggle the reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  {...task, reminder : !task.reminder} : task));
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTasks(!showAddTasks)} 
      showAdd={showAddTasks}/>
      {showAddTasks && <AddTask onAdd={ addTask }/>}
      {tasks.length <= 0 ? "No task" : 
      <Tasks tasks={ tasks } onDelete={ deleteTask }
      onToggle={ toggleReminder } />}
    </div>
  );
}

export default App;
