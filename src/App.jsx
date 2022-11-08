import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import TasksStats from "./components/TasksStats";
import TaskForm from "./components/TaskForm";
import tasksData from "./data/tasksData";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <TaskForm handleAdd={addTask} />
        <TasksStats tasks={tasks} />
        <TasksList tasks={tasks} handleDelete={deleteTask} />
      </div>
    </>
  );
}

export default App;
