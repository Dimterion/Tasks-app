import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";

function TaskForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
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
