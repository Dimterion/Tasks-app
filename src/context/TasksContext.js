import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      rating: 10,
    },
    {
      id: 2,
      text: "Task 2",
      rating: 9,
    },
    {
      id: 3,
      text: "Task 3",
      rating: 7,
    },
  ]);

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
    <TasksContext.Provider
      value={{
        tasks,
        deleteTask,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
