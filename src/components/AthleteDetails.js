import React from "react";
import { useParams } from "react-router-dom";
import athletes from "../data/athletes";
import StatBar from "./StatBar";

function AthleteDetails() {
  const { name } = useParams();
  const athlete = athletes.find((athlete) => athlete.name === name);

  if (!athlete) {
    return <p>Athlete not found!</p>;
  }

  return (
    <div>
        <div className="detail-box">
        <div className="image-container">
        <img
        src={athlete.detailpicture}
        alt={athlete.name}
      />
        </div>
        <div className="athlete-detail">
        <h2>{athlete.name}</h2>
        <span>{athlete.span}</span>
      <p><strong>Sport:</strong> {athlete.sport}</p>
      <p><strong>Height:</strong> {athlete.physicalStats.height}</p>
      <p><strong>Weight:</strong> {athlete.physicalStats.weight}</p>
      <p><strong>Adolescent Training:</strong> {athlete.adolescentTraining}</p>
      <p><strong>Hand-Eye Coordination:</strong> {athlete.handEyeCoordination}</p>
      <p><strong>Visual Acuity:</strong> {athlete.visualAcuity}</p>
      <p><strong>Achievements:</strong></p>
      <ul>
        {athlete.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
        </div>
        </div>
        <div className="stat-bar">
<StatBar label="Sleep (hours)" value={athlete.sleep} min={1} max={12} />
   <StatBar label="Quiet Eye Duration (seconds)" value={athlete.quietEyeDuration} min={1} max={3} />
<StatBar label="Peripheral Vision (%)" value={athlete.peripheralVision} min={0} max={100} />
<StatBar label="Spatial-Temporal Processing" value={athlete.spatialTemporalProcessing} min={0} max={100} />
<StatBar label="Adaptability Under Pressure" value={athlete.adaptabilityUnderPressure} min={0} max={100} />
<StatBar label="Visuomotor Coordination" value={athlete.visuomotorCoordination} min={0} max={100} />
<StatBar label="Blocking Distracting Stimuli (%)" value={athlete.blockingDistractions} min={0} max={100} />
<StatBar label="Motor Learning and Adaptation" value={athlete.motorLearning} min={0} max={100} />
<StatBar label="Motor Memory" value={athlete.motorMemory} min={0} max={100} />
<StatBar label="Pressure-Resilient Decision-Making" value={athlete.pressureDecisionMaking} min={0} max={100} />
<StatBar label="Mental Resilience" value={athlete.mentalResilience} min={0} max={100} />
<StatBar label="Competitive Mindset" value={athlete.competitiveMindset} min={0} max={100} />
</div>
<div className="descripton-of-athlete">
{athlete.descripton}
</div>
    </div>
  );
}

export default AthleteDetails;
