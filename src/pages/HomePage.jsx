import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TasksStats from "../components/TasksStats";
import TasksList from "../components/TasksList";
import tasksData from "../data/tasksData";

function HomePage() {
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
      <TaskForm handleAdd={addTask} />
      <TasksStats tasks={tasks} />
      <TasksList tasks={tasks} handleDelete={deleteTask} />
    </>
  );
}

export default HomePage;
