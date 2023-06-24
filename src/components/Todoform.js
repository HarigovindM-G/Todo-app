import React, { useState } from "react";

export default function Todoform({ addToDo }) {
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addToDo(task);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="What are today's tasks"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="Submit">ADD TASK</button>
    </form>
  );
}
