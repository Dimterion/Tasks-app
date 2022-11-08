import { motion, AnimatePresence } from "framer-motion";
import { PropTypes } from "prop-types";
import TaskItem from "./TaskItem";

function TasksList({ tasks, handleDelete }) {
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
            <TaskItem
              key={taskItem.id}
              taskItem={taskItem}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default TasksList;
