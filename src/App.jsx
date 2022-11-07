import { useState } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import tasksData from "./data/tasksData";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <>
      <Header />
      <div className="container">
        <TasksList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
