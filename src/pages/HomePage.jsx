import TaskForm from "../components/TaskForm";
import TasksStats from "../components/TasksStats";
import TasksList from "../components/TasksList";
import { TasksProvider } from "../context/TasksContext";

function HomePage() {
  return (
    <TasksProvider>
      <TaskForm />
      <TasksStats />
      <TasksList />
    </TasksProvider>
  );
}

export default HomePage;
