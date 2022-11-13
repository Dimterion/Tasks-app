import TaskForm from "../components/TaskForm";
import TasksStats from "../components/TasksStats";
import TasksList from "../components/TasksList";
import { TasksProvider } from "../context/TasksContext";

function TasksAppPage() {
  return (
    <TasksProvider>
      <h2>Tasks App</h2>
      <TaskForm />
      <TasksStats />
      <TasksList />
    </TasksProvider>
  );
}

export default TasksAppPage;
