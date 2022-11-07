import { PropTypes } from "prop-types";
import TaskItem from "./TaskItem";

function TasksList({ tasks, handleDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <div>
      {tasks.map((taskItem) => (
        <TaskItem
          key={taskItem.id}
          taskItem={taskItem}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default TasksList;
