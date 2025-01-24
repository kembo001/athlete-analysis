import React from "react";
import './Traits.css'

const traits = [
  {
    name: "Quiet Eye (QE) Duration",
    description: `Quiet Eye is the final fixation or tracking gaze on a specific target before initiating a movement. Elite athletes maintain longer QE durations, which are linked to improved accuracy and decision-making.`,
    examples: [
        <span>
          Golfers during putting (
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3111367/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vine & Wilson
          </a>
          )
        </span>,
        <span>
          Basketball players during free throws (
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0079612317300730"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vickers, 1996, 2001
          </a>
          )
        </span>,
        <span>
          Police officers under high-pressure shooting scenarios (
          <a
            href="https://www.researchgate.net/publication/51538645_Performing_under_pressure_Gaze_control_decision_making_and_shooting_performance_of_elite_and_rookie_police_officers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vickers & Lewinski
          </a>
          )
        </span>,
      ],
  },
  {
    name: "Enhanced Peripheral Vision and Fixation Strategies",
    description: `Professional athletes, especially those in sports requiring quick reaction times (e.g., baseball players and goaltenders), have superior peripheral vision and fixation strategies.`,
    examples: [
      "Can process multiple moving objects simultaneously",
      "Efficiently switch between central and peripheral targets (Laby, 1992; Panchuk, Vickers)",
    ],
  },
  {
    name: "Spatial-Temporal Processing",
    description: `Goaltenders and other reactive athletes excel at predicting object trajectories under time constraints. They use early visual cues to anticipate and position themselves optimally.`,
    examples: ["Research by Panchuk & Vickers"],
  },
  {
    name: "Adaptability Under Pressure",
    description: `High-level athletes maintain gaze control and visual attention even under stress, which minimizes the negative effects of pressure on performance.`,
    examples: ["Research by Vickers & Lewinski"],
  },
  {
    name: "Superior Visuomotor Coordination",
    description: `Studies show that elite athletes can precisely align their vision and motor skills for peak performance.`,
    examples: [
      "Quiet Eye Training Facilitates Visuomotor Coordination in Children with Developmental Coordination Disorder (Miles, Wood, Vine, Vickers, Wilson)",
    ],
  },
  {
    name: "Visual Acuity and Depth Perception",
    description: `Baseball players and other elite athletes demonstrate exceptional visual acuity and depth perception, critical for tasks like hitting a fastball or catching.`,
    examples: ["Laby, 1992"],
  },
  {
    name: "Ability to Block Distracting Stimuli",
    description: `Athletes are adept at focusing on task-relevant stimuli and filtering out distractions, a skill enhanced by Quiet Eye training.`,
    examples: ["Vine, Wilson, Vickers"],
  },
  {
    name: "Motor Learning and Adaptation",
    description: `Elite performers refine movement patterns through iterative learning, adapting strategies based on feedback and optimizing biomechanics for efficiency and precision.`,
    examples: ["Research by Gray, Rob"],
  },
  {
    name: "Memory of Movement Patterns (Motor Memory)",
    description: `Elite athletes have a robust ability to recall and execute specific motor sequences under various conditions, enabling consistent performance.`,
    examples: [],
  },
  {
    name: "Pressure-Resilient Decision-Making",
    description: `The integration of gaze behavior and spatial attention allows athletes to make split-second decisions without succumbing to stress.`,
    examples: ["Vickers & Lewinski, 1996"],
  },
];

function TraitsPage() {
  return (
    <div style={{ padding: "20px", margin: "0 auto" }}>
      <h2>Unique Traits of Elite Athletes</h2>
      <p>
        Explore the fascinating traits that enable elite athletes to perform at
        the highest level. These qualities are a blend of natural talent,
        rigorous training, and scientific optimization.
      </p>
      <ul className="traits-listing">
        {traits.map((trait, index) => (
          <li className="trait-box"
            key={index}>
            <h3>{trait.name}</h3>
            <p>{trait.description}</p>
            {trait.examples.length > 0 && (
              <ul>
                {trait.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TraitsPage;
