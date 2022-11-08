import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { PropTypes } from "prop-types";
import Card from "./shared/Card";
import TasksContext from "../context/TasksContext";

function TaskItem({ taskItem }) {
  const { deleteTask } = useContext(TasksContext);

  return (
    <Card>
      <div className="num-display">{taskItem.rating}</div>
      <button onClick={() => deleteTask(taskItem.id)} className="close">
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
