import { useContext } from "react";
import TasksContext from "../context/TasksContext";
import Button from "./shared/Button";

function TasksStats() {
  const { tasks, clearTasks } = useContext(TasksContext);

  return (
    <div className="feedback-stats">
      <h4>
        {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
      </h4>
      <Button
        version={"secondary"}
        isDisabled={tasks.length > 0 ? false : true}
        handleClick={clearTasks}
      >
        Clear tasks
      </Button>
    </div>
  );
}

export default TasksStats;
