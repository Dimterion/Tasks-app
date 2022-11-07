import { useState } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import TasksStats from "./components/TasksStats";
import TaskForm from "./components/TaskForm";
import tasksData from "./data/tasksData";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <TaskForm />
        <TasksStats tasks={tasks} />
        <TasksList tasks={tasks} handleDelete={deleteTask} />
      </div>
    </>
  );
}

export default App;
