import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import TaskItem from "./TaskItem";
import TasksContext from "../context/TasksContext";

function TasksList() {
  const { tasks } = useContext(TasksContext);

  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  // Without animation:
  // return (
  //   <div>
  //     {tasks.map((taskItem) => (
  //       <TaskItem
  //         key={taskItem.id}
  //         taskItem={taskItem}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );

  // With animation:
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
            <TaskItem key={taskItem.id} taskItem={taskItem} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TasksList;
