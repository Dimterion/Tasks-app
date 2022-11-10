import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import TasksContext from "../context/TasksContext";

function TaskForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addTask, tasksEdit, updateTasks } = useContext(TasksContext);

  useEffect(() => {
    if (tasksEdit.edit === true) {
      setBtnDisabled(false);
      setText(tasksEdit.task.text);
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
      };

      if (tasksEdit.edit === true) {
        updateTasks(tasksEdit.task.id, newTask);
      } else {
        addTask(newTask);
      }

      setText("");
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add new task</h2>
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
