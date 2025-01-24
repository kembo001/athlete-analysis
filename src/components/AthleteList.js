import React from "react";
import { Link } from "react-router-dom";
import athletes from "../data/athletes";


function AthleteList() {
  return (
    <div className="athlete-list">
      {athletes.map((athlete, index) => (
        <Link
          to={`/athlete/${athlete.name}`}
          key={index}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="athlete-card">
            <img
              src={athlete.listpicture}
              alt={athlete.name}
            />
            <h3>
              {athlete.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AthleteList;
