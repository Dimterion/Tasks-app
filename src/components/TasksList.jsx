import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import TaskItem from "./TaskItem";
import TasksContext from "../context/TasksContext";

function TasksList() {
  const { tasks } = useContext(TasksContext);

  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {tasks.map((taskItem) => (
          <motion.div
            key={taskItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <TaskItem key={taskItem.id} taskItem={taskItem} taskNumber={tasks.indexOf(taskItem) + 1} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TasksList;
