import React, { useState } from "react";
import "./ChallengeSkill.css";

function ChallengeSkillBalance() {
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Initial position in percentage
  const [message, setMessage] = useState("");

  const handleDrag = (event) => {
    // Prevent default to avoid potential drag image in some browsers
    event.preventDefault();

    // The parent element is the "graph-area"
    const rect = event.target.parentElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    // Limit position to stay within 0%–100% bounds
    setPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handleMouseUp = () => {
    if (position.x > 40 && position.x < 60 && position.y > 40 && position.y < 60) {
      setMessage("You are in the Flow Zone!");
    } else if (position.y > 60) {
      setMessage("Feeling overwhelmed? Try building more skills.");
    } else if (position.y < 40) {
      setMessage("Feeling bored? Increase the challenge.");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="challenge-skill-container">
      <h2>Challenge-Skill Balance</h2>
      <p>
        Drag the dot to indicate where you currently feel in terms of challenge and skill.
        Aim for the "flow zone" in the center!
      </p>

      <div
        className="challenge-skill-graph"
        onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
        onMouseUp={handleMouseUp}
      >
        {/* Axis Labels */}
        <div className="labels">
          <span className="label top">High Challenge</span>
          <span className="label bottom">Low Challenge</span>
          <span className="label left">Low Skill</span>
          <span className="label right">High Skill</span>
        </div>

        {/* Draggable Dot */}
        <div
          className="draggable-dot"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
          }}
        />
      </div>

      <p className="message">{message}</p>
    </div>
  );
}

export default ChallengeSkillBalance;
