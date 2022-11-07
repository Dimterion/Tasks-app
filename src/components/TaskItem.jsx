import { FaTimes } from "react-icons/fa";
import { PropTypes } from "prop-types";
import Card from "./shared/Card";

function TaskItem({ taskItem, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{taskItem.rating}</div>
      <button onClick={() => handleDelete(taskItem.id)} className="close">
        <FaTimes />
      </button>
      <div className="text-display">{taskItem.text}</div>
    </Card>
  );
}

TaskItem.propTypes = {
  taskItem: PropTypes.object.isRequired,
};

export default TaskItem;
