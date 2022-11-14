import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  // Get tasks from local storage
  const getLocalTask = () => {
    let tasksList = localStorage.getItem("tasks");

    if (tasksList) {
      return JSON.parse(tasksList);
    } else {
      return [];
    }
  };

  const [tasks, setTasks] = useState(getLocalTask);

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

  // Update tasks
  const updateTasks = (id, updTask) => {
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

      setTasksEdit({
        task: {},
        edit: false,
      });
    }
  };

  // Add tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tasksEdit,
        deleteTask,
        addTask,
        editTask,
        updateTasks,
        clearTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
