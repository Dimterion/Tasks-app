import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function TasksStats() {
  const { tasks, clearTasks } = useContext(TasksContext);

  return (
    <div className="feedback-stats">
      <h4>
        {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
      </h4>
      <button onClick={() => clearTasks()}>Clear all</button>
    </div>
  );
}

export default TasksStats;
