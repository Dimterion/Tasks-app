import { PropTypes } from "prop-types";
import Card from "./shared/Card";

function TaskItem({ taskItem }) {
  return (
    <Card>
      <div className="num-display">{taskItem.rating}</div>
      <div className="text-display">{taskItem.text}</div>
    </Card>
  );
}

TaskItem.propTypes = {
  taskItem: PropTypes.object.isRequired,
};

export default TaskItem;
