import { useState } from "react";

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const isSubmitDisabled = taskTitle.trim() === "";
  const handleChange = (e) => {
    setTaskTitle(e.target.value);

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = taskTitle.trim();

    if (trimmedTitle === "") {
      setError("عنوان تسک نمی‌تواند خالی باشد");
      return;
    }

    setError("");
    setTasks((prevTasks) => [...prevTasks, trimmedTitle]);
    setTaskTitle("");
  };

  return (
    <section className="task-form">
      <h2>Create Task</h2>

      <form onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}

        <input
          type="text"
          placeholder="task title"
          value={taskTitle}
          onChange={handleChange}
        />

        <button type="submit" disabled={isSubmitDisabled}>
          Add Task
        </button>
      </form>

      {tasks.length > 0 && (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskForm;
