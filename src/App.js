import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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

// delete Task
const deleteTask = (id) => {
    console.log("delete!", id);
}
  return (
    <div className="container">
      <Header />
      <Tasks tasks={ tasks }/>
    </div>
  );
}

export default App;
