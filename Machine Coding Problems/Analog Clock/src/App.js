import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="clock-container">
      <div className="clock-face">
        {/* Hour Hand */}
        <div
          className="hand hour-hand"
          style={{
            transform: `rotate(${hours * 30 + minutes / 2}deg)`,
          }}
        />
        {/* Minute Hand */}
        <div
          className="hand minute-hand"
          style={{
            transform: `rotate(${minutes * 6}deg)`,
          }}
        />
        {/* Second Hand */}
        <div
          className="hand second-hand"
          style={{
            transform: `rotate(${seconds * 6}deg)`,
          }}
        />
      </div>
    </div>
  );
}
