import { useState } from "react";
function TaskCounter() {
  const [count, setCount] = useState(0);
  const increaseClick = () => {
    setCount(count + 1);
  };
  const resetClick = () => {
    setCount(0)
  };
  const decreaseClick = () =>{
    setCount(
      (prevCount)=> prevCount > 0 ? prevCount-1 : 0
    )
    
  }
  return (
    <section className="task-counter">
      <h2>Task counter</h2>
      <p>current value : {count}</p>
      <div className="counter-actions">
        <button type="button" onClick={increaseClick}>
        Increase
      </button>
      <button type="button" onClick={resetClick}>
        Reset
      </button>
      <button type="button" onClick={decreaseClick} disabled={count===0}>
        Decrease
      </button>
      </div>
    </section>
  );
}
export default TaskCounter;
