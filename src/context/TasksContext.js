import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      text: "Add your task",
    },
  ]);

  const [tasksEdit, setTasksEdit] = useState({
    task: {},
    edit: false,
  });

  // Add task
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));

      setTasksEdit({
        task: {},
        edit: false,
      });
    }
  };

  // Update task
  const updateTask = (id, updTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updTask } : task))
    );

    setTasksEdit({
      task: {},
      edit: false,
    });
  };

  // Set task to be updated
  const editTask = (task) => {
    setTasksEdit({
      task,
      edit: true,
    });
  };

  // Clear all tasks
  const clearTasks = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tasksEdit,
        deleteTask,
        addTask,
        editTask,
        updateTask,
        clearTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
