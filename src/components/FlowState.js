import React, { useState } from 'react';
import "./FlowState.css";
import FlowStateGraph from "../Images/Csikszentmihalyi's Flow State.png";
import ChallengeSkillBalance from './ChallengeSkill';

function FlowState() {
    // State for the user's selected activity
    const [selectedActivity, setSelectedActivity] = useState('');
  
    // Suggestions for entering flow in each activity
    const flowSuggestions = {
      sports: [
       "Achieving flow in sports involves having clear and measurable goals that guide your practice or performance. When your objectives are well-defined, your mind knows what to focus on, reducing distractions. Engaging in challenges slightly beyond your current skill level is key; this keeps you fully engaged and prevents boredom or anxiety. Being fully present in the moment is critical—focus entirely on your movements, decisions, and environment. Developing pre-performance routines, such as warm-ups or mental visualization, can act as triggers to help you enter a flow state. Finally, immediate feedback from metrics, teammates, or coaches allows you to make adjustments and stay immersed in the experience."
      ],
      art: [
        "To enter flow while creating art, start by crafting a comfortable, distraction-free environment that inspires creativity. Setting a clear intention for what you want to create provides direction and focus. Embracing the process itself, rather than fixating on the final outcome, fosters a state of immersion and joy. Working for uninterrupted periods helps you lose track of time and dive deeply into your work. Letting your emotions and passion guide your artistic expression connects you more deeply to the activity, allowing creativity to flow naturally and effortlessly."
      ],
      work: [
        "In the workplace, flow often begins with breaking tasks into smaller, focused steps that feel achievable yet challenging. When your tasks align with your strengths and interests, they are more likely to captivate your attention and keep you engaged. Minimizing distractions, such as unnecessary notifications or multitasking, helps maintain focus for extended periods. Feedback plays an important role—whether it’s from a supervisor, data, or your progress, knowing how you’re performing keeps you engaged. Striking a balance between the difficulty of a task and your skill level is essential; tasks that are too easy may bore you, while those that are too hard can lead to frustration. This balance fosters the deep concentration and satisfaction characteristic of flow."
      ],
      default: [
        "Select an activity to see tips on sparking flow in that domain!"
      ]
    };
  
    // Handler for dropdown changes
    const handleActivityChange = (e) => {
      setSelectedActivity(e.target.value);
    };

  return (
    <div className='flow-state padding-intro'>
      <h2>Flow State: The Key to Peak Performance</h2>
      
      <section>
        <p>
          Flow state, often called <strong>"being in the zone"</strong>, is a mental state where a person is fully immersed in an activity with heightened focus, enjoyment, and performance. Mihaly Csikszentmihalyi, the pioneer of flow research, describes it as a harmonious experience where the mind and body work seamlessly, making challenging tasks feel effortless. Achieving flow is not only linked to peak performance but also to psychological well-being and happiness.
        </p>
      </section>
      <div className='flow-image-container'>
        <img src={FlowStateGraph} alt="Flow State Diagram" title="Flow State"/>
      </div>
      
      <section>
        <h3>Personal Narrative</h3>
        <p>
          Flow is a universal experience, often felt during moments of challenge and deep focus. In <a href="https://www.goodreads.com/book/show/905.The_Inner_Game_of_Tennis" target="_blank" rel="noreferrer">The Inner Game of Tennis</a>, W. Timothy Gallwey recalls a moment when he instructed a player to stop overthinking their swing:
        </p>
        <blockquote style={{ fontStyle: "italic" }}>
          "I asked him to simply focus on watching the seams of the tennis ball as it came towards him, letting go of any thoughts about technique or results. To his surprise, his shots became more consistent and powerful. By focusing fully on the task at hand, he experienced a level of play that felt almost effortless."
        </blockquote>
        <p>
          This anecdote highlights how the absence of self-consciousness and the alignment of challenge with focus can bring about flow. Whether in sports, art, or any activity, these moments of immersion often lead to unparalleled performance and joy.
        </p>
      </section>

      <section className='keys'>
        <div className='keys-to-flow'>
          <h3>Key Elements of Flow</h3>
          <ul>
            <li>
              <strong>Balance Between Challenge and Skill:</strong> Tasks must be challenging enough to push limits but not so difficult as to cause frustration.
            </li>
            <li>
              <strong>Loss of Self-Consciousness:</strong> During flow, individuals stop overthinking or doubting themselves, enabling peak performance.
            </li>
            <li>
              <strong>Clear Goals and Immediate Feedback:</strong> Having clear objectives and understanding progress helps maintain focus.
            </li>
          </ul>
        </div>

        <div className='keys-to-flow'>
          <h3>Benefits of Flow</h3>
          <ul>
            <li>
              <strong>Enhanced Performance:</strong> Athletes, artists, and professionals achieve their best during flow.
            </li>
            <li>
              <strong>Increased Self-Confidence:</strong> Flow boosts self-esteem and promotes a positive mindset.
            </li>
            <li>
              <strong>Happiness and Fulfillment:</strong> Studies show flow is highly correlated with both Subjective Well-Being (SWB) and Psychological Well-Being (PWB).
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3>Unlocking the Flow State</h3>
        <p>
          To achieve flow, it’s crucial to balance challenge with skill, quiet the inner critic, and stay fully present. Gallwey’s concept of Self 1 (the analytical mind) and Self 2 (the intuitive body) emphasizes the importance of silencing internal dialogue and trusting instinctive actions. Engage in tasks that stretch your abilities without overwhelming you, and as you grow, adjust challenges to maintain this balance.
        </p>
        <p>
          Clear goals and immediate feedback keep you motivated and on track, while cultivating relaxed concentration helps you stay focused and tension-free. Techniques like mindfulness, visualization, and deep breathing can enhance this state. Minimizing distractions and creating a conducive environment further allow immersion, enabling you to embrace the present moment and experience the timeless joy of flow.
        </p>
        <p>
          Ultimately, flow thrives on intrinsic motivation—choosing activities that you find inherently rewarding fosters passion and commitment. Physical activities, such as sports or dance, often enhance flow through a deep connection between mind and body.
        </p>
      </section>

   

       <ChallengeSkillBalance />

      <section className='flow-summary'>
        <h3>Cultivate Flow</h3>
        <p>
          Cultivating flow involves aligning your challenges with your skill level, minimizing distractions, and setting clear goals. Beyond personal development, flow can benefit society by fostering creativity, well-being, and a sense of purpose. As Mihaly Csikszentmihalyi says:
        </p>
        <blockquote>
          "Flow is not just about peak performance; it is a pathway to a fulfilled and meaningful life."
        </blockquote>
        <p>
          Ready to gauge your own flow potential? Try the interactive check below to see how often you feel “in the zone” and get a quick tip on how to improve.
        </p>


        <div className="flow-trigger">
          <h4>Flow Trigger Selector</h4>
          <label htmlFor="activity-select">
            Pick an activity:
          </label>
          <select
            id="activity-select"
            value={selectedActivity}
            onChange={handleActivityChange}
          >
            <option value="">--Choose an Activity--</option>
            <option value="sports">Sports</option>
            <option value="art">Art</option>
            <option value="work">Work</option>
          </select>

          <div className="flow-suggestions">
            <h5>Suggestions for Entering Flow:</h5>
            {selectedActivity 
              ? flowSuggestions[selectedActivity]?.map((suggestion, index) => (
                  <p key={index}>• {suggestion}</p>
                ))
              : <p>{flowSuggestions.default[0]}</p>
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlowState;
