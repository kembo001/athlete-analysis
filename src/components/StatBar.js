import React, { useState, useEffect } from "react";

function StatBar({ label, value, min, max, intervals = 12 }) {
  const [currentValue, setCurrentValue] = useState(min); // Start at min value
  const percentage = ((currentValue - min) / (max - min)) * 100;

  const red = 255 - Math.round((currentValue - min) * (255 / (max - min)));
  const green = Math.round((currentValue - min) * (255 / (max - min)));
  const color = `rgb(${red}, ${green}, 0)`;

  const intervalWidth = 100 / intervals;

  useEffect(() => {
    const increment = (value - min) / 100; // Increment step based on the target value
    const duration = 1500; // Animation duration in milliseconds
    const stepInterval = duration / 100; // Interval between steps

    let current = min;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value; // Ensure we don't exceed the target value
        clearInterval(timer); // Stop the interval when target is reached
      }
      setCurrentValue(current);
    }, stepInterval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [value, min]);

  return (
    <div style={{ margin: "10px 0" }}>
      <p>
        <strong>{label}:</strong> {Math.round(currentValue)}
      </p>
      <div
        style={{
          position: "relative",
          height: "20px",
          width: "80%",
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percentage}%`,
            backgroundColor: color,
            transition: "width 0.1s ease, background-color 0.1s ease",
          }}
        ></div>

        {Array.from({ length: intervals - 1 }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${intervalWidth * (index + 1)}%`,
              top: "0",
              bottom: "0",
              width: "2px",
              backgroundColor: "#ffffff",
              opacity: 0.5,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default StatBar;
