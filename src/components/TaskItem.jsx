function TaskItem({ task, handleToggleTask, handleDelete }) {
  return (
    <li className={task.isDone ? "task-item task-item--done" : "task-item"}>
      <span>{task.title}</span>

      <button type="button" onClick={() => handleToggleTask(task.id)}>
        {task.isDone ? "Undo" : "Done"}
      </button>

      <button type="button" onClick={() => handleDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}
export default TaskItem;
