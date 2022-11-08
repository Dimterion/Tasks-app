import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import TasksContext from "../context/TasksContext";

function TaskForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addTask, tasksEdit, updateTask } = useContext(TasksContext);

  useEffect(() => {
    if (tasksEdit.edit === true) {
      setBtnDisabled(false);
      setText(tasksEdit.task.text);
      setRating(tasksEdit.task.rating);
    }
  }, [tasksEdit]);

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

      if (tasksEdit.edit === true) {
        updateTask(tasksEdit.task.id, newTask);
      } else {
        addTask(newTask);
      }

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
