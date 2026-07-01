import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const isSubmitDisabled = taskTitle.trim() === "";
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.isDone).length;
  const pendingTasks = totalTasks - doneTasks;
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

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      isDone: false,
    };

    setError("");

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTaskTitle("");
    console.log(tasks);
  };
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              isDone: !task.isDone,
            }
          : task,
      ),
    );
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
      {
        <div className="task-summary">
          <p>total tasks : {totalTasks}</p>
          <p>done tasks : {doneTasks}</p>
          <p>pending tasks : {pendingTasks}</p>
        </div>
      }
      {tasks.length > 0 && (
  <ul className="task-list">
    {tasks.map((task) => (
    <TaskItem key={task.id} task={task} handleToggleTask={handleToggleTask} handleDelete={handleDelete} />
    ))}
  </ul>
)}
    </section>
  );
}

export default TaskForm;
