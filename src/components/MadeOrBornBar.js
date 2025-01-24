import React from "react";

function StatBar({ label, value, min, max, intervals = 12 }) {

  const percentage = ((value - min) / (max - min)) * 100;


  const red = 255 - Math.round((value - min) * (255 / (max - min)));
  const green = Math.round((value - min) * (255 / (max - min)));
  const color = `rgb(${red}, ${green}, 0)`;


  const intervalWidth = 100 / intervals;

  return (
    <div style={{ margin: "10px 0" }}>
      <p>
        <strong>{label}:</strong> {value}
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
            transition: "width 0.5s ease, background-color 0.5s ease",
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
