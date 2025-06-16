import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };
  const deleteTask = (x) => {
    const updated = tasks.filter((_, i) => i !== x);
    setTasks(updated);
  };
  return (
     <>
      <h1>To-Do List</h1>
      <input type="text" placeholder="Add a task..." value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, x) => (
          <li key={x} style={{ marginTop: "10px" }}>
              {task.text}
            <button onClick={() => deleteTask(x)} >
              done
            </button>
          </li>
        ))}
      </ul>
   </>
  );
};

export default TodoList;
