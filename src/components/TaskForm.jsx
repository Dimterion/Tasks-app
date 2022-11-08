import { useState, useContext } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import TasksContext from "../context/TasksContext";

function TaskForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addTask } = useContext(TasksContext);

  const handleTextChange = ({ target: { value } }) => {
    if (value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 5) {
      setBtnDisabled(true);
      setMessage("Task must be at least 5 characters long.");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 5) {
      const newTask = {
        text,
        rating,
      };

      addTask(newTask);

      setText("");
      setRating(10);
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add new task</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Type your task"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Add
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default TaskForm;
