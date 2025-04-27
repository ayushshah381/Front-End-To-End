import { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timer = useRef();

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(timer.current);
  };

  const resetInterval = () => {
    setCount(0);
    clearInterval(timer.current);
  };

  return (
    <>
      <div>Count: {count} </div>
      <div>
        <button onClick={startTimer}> Start </button>
        <button onClick={pauseTimer}> pause </button>
        <button onClick={resetInterval}> reset </button>
      </div>
    </>
  );
};

export default Timer;
