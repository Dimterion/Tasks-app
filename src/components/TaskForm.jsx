import { useState } from "react";
import Card from "./shared/Card";

function TaskForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Add new task</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Type your task"
            value={text}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </Card>
  );
}

export default TaskForm;
