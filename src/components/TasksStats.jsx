import { PropTypes } from "prop-types";

function TasksStats({ tasks }) {
  // Calculate avg rating
  let average =
    tasks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / tasks.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{tasks.length} tasks</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

TasksStats.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TasksStats;