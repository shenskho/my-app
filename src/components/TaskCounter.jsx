function TaskCounter() {
  const HandleIncreaseClick = () => {
    console.log("دکمه افزایش کلیک شد");
  };
  return (
    <section className="task-counter">
      <h2>Task counter</h2>
      <p>current value : 0</p>
      <button type="button" onClick={HandleIncreaseClick}>
        Increase
      </button>
    </section>
  );
}
export default TaskCounter
