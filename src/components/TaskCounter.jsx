import { useState } from "react";
function TaskCounter() {
  const [count, setCount] = useState(0);
  const handleIncreaseClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleResetClick = () => {
    setCount(0);
  };
  const handleDecreaseClick = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  const counterMessageClass = count === 0 ?"counter-message counter-message--empty": count < 5 ? "counter-message counter-message--low" : "counter-message counter-message--high"
  const counterMessage =
    count === 0
      ? "هیچ تسکی وجود ندارد"
      : count < 5
        ? "تعداد تسک ها کم است "
        : "تسک های زیادی داری";
  return (
    <section className="task-counter">
      <h2>Task counter</h2>
      <p>current value : {count}</p>
      <p className={counterMessageClass}>{counterMessage}</p>
      <div className="counter-actions">
        <button type="button" onClick={handleIncreaseClick}>
          Increase
        </button>
        {count > 0 && (
          <button type="button" onClick={handleResetClick}>
            Reset
          </button>
        )}
        <button
          type="button"
          onClick={handleDecreaseClick}
          disabled={count === 0}
        >
          Decrease
        </button>
      </div>
    </section>
  );
}
export default TaskCounter;
