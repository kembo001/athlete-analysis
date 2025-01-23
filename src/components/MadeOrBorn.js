import React, { useState } from "react";
import StatBar from "./StatBar"; 

function MadeOrBorn() {
    const [sliderValue, setSliderValue] = useState(50);
  
    // Handler for slider change
    const handleSliderChange = (event) => {
      setSliderValue(Number(event.target.value));
    };
  
    // Example: dynamic explanation text based on sliderValue
    const renderExplanation = () => {
      if (sliderValue >= 70) {
        return (
          <p>
            You’re leaning heavily towards <strong>Nature</strong>, suggesting
            you believe genetics play the dominant role in athletic success.
          </p>
        );
      } else if (sliderValue <= 30) {
        return (
          <p>
            You’re leaning heavily towards <strong>Nurture</strong>, indicating
            a belief that environment, training, and hard work are the largest
            factors in developing elite athletes.
          </p>
        );
      } else {
        return (
          <p>
            You believe there is a balanced interplay between genetics and
            environment, implying that while DNA lays the groundwork, effective
            coaching and resources are equally crucial.
          </p>
        );
      }
    };
  

    const speed = sliderValue;               
    const endurance = 100 - sliderValue;      
    const strength = Math.round(50 + (sliderValue - 50) * 0.5); 
    const technique = Math.round(50 + (100 - sliderValue) * 0.3); 
    const reactionTime = Math.round(70 + (sliderValue - 50) * 0.2); 
    const handEyeCoordination = Math.round(60 + (sliderValue - 50) * 0.3); 
    const workEthic = Math.round(20 + (130 - sliderValue) * 0.5); 
    const mentalToughness = Math.round(50 + (100 - sliderValue) * 0.4); 

  return (
    <div style={{ padding: "20px", margin: "0 auto" }}>
      <h2>Are the Best Athletes Made or Born?</h2>
      <p>
        The question of whether elite athletes are "made or born" has sparked
        debates for generations. While some argue that genetics&mdash;"DNA is
        destiny"&mdash;play the biggest role, others emphasize hard work,
        dedication, and nurture. The truth lies in a complex interplay between
        nature and nurture.
      </p>
      <h4><strong>The Role of Genetics</strong></h4>
      <p>
        Genetics undeniably influence athletic potential. Traits like height,
        body composition, and even aerobic capacity have strong genetic
        components, as shown in twin studies. Identical twins, who share the
        same DNA, often display similar levels of fitness and response to
        training compared to fraternal twins. Modern research has also
        identified hundreds of genes that contribute to athletic traits, such
        as strength and endurance, but these traits are polygenic (influenced
        by multiple genes) and interact with one another in complex ways.
      </p>
      <div className="comparison-container">
        <div className="comparison-card">
          <h5>Genetics</h5>
          <ul>
            <li>Determines traits like height and body composition</li>
            <li>Strong genetic influence on aerobic capacity (25–60%)</li>
            <li>Polygenic traits influenced by hundreds of genes</li>
            <li>Family history and twin studies support genetic links</li>
          </ul>
        </div>
        <div className="comparison-card">
          <h5>Training</h5>
          <ul>
            <li>Shapes skill acquisition and technique</li>
            <li>Environmental factors like coaching and resources</li>
            <li>Training programs enhance strength and endurance</li>
            <li>Varied responses to training based on genetics</li>
          </ul>
        </div>
      </div>
      <h4><strong>The Role of Environment</strong></h4>
      <p>
        However, genes do not act in isolation. Environmental
        factors&mdash;training, nutrition, coaching, and even access to
        resources&mdash;are critical in shaping an athlete's potential. Studies
        reveal that even within the same training programs, individuals respond
        differently due to their genetic predispositions. Some improve
        dramatically, while others show minimal gains, highlighting the genetic
        basis of training response.
      </p>
      <div className="nature-vs-nurture">
        <h4><strong>Nature vs. Nurture</strong></h4>
        <p>
          Use the slider below to explore the balance between genetics (Nature)
          and environment (Nurture) in athletic performance.
        </p>
        <div className="slider-container">
          <label htmlFor="nature-nurture-slider">Nature</label>
          <input
            type="range"
            id="nature-nurture-slider"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <label htmlFor="nature-nurture-slider">Nurture</label>
        </div>
        <p className="slider-output">
          Balance: {sliderValue}% Nature / {100 - sliderValue}% Nurture
        </p>
        {renderExplanation()}
      </div>

      {/* ---- Simulated Athlete Profile Section ---- */}
      <section style={{ marginTop: "30px" }}>
<div className="simulated-athlete">
<h3>Simulated Athlete Profile</h3>
<p>
          Below is a hypothetical set of athlete attributes. The more you tilt
          the slider toward Nature, the higher attributes like Speed (which can
          be highly genetic) become. The more you tilt it toward Nurture, the
          stronger environmental factors like Endurance (often built through
          training) get.
        </p>
<div className="athlete-stat-bar">
<StatBar label="Speed" value={speed} min={0} max={100} />
        <StatBar label="Endurance" value={endurance} min={0} max={100} />
        <StatBar label="Strength" value={strength} min={0} max={100} />
        <StatBar label="Technique" value={technique} min={0} max={100} />
        <StatBar label="Reaction Time" value={reactionTime} min={0} max={100} />
        <StatBar label="Hand Eye Coordination" value={handEyeCoordination} min={0} max={100} />
        <StatBar label="Work Ethic" value={workEthic} min={0} max={100} />
        <StatBar label="Mental Toughness" value={mentalToughness} min={0} max={100} />
</div>
</div>
      </section>

      <h4><strong>Genetic Testing and Its Limitations</strong></h4>
      <p>
        The commercialization of genetic testing for predicting athletic
        potential has gained popularity, but experts strongly discourage its
        use for talent identification. Leading journals have warned that such
        tests oversimplify the complex relationship between genetics and
        athletic performance.
      </p>
      <h4><strong>What We Should Do</strong></h4>
      <p>
        Instead of focusing solely on genetics, it&rsquo;s essential to develop
        a holistic approach to athleticism. Growth, maturation, and
        environmental influences all play critical roles. As Professor Bob
        Malina said, "Genetics loads the gun, but the environment pulls the
        trigger." Talent is dynamic, multidimensional, and evolves over time
        with the right coaching and opportunities.
      </p>
      <p>
        By respecting the complexity of human potential, we can create an
        environment that nurtures talent and allows athletes to thrive,
        regardless of their genetic starting point.
      </p>
      <section style={{ marginTop: "30px" }}>
  <h4>References</h4>
  <ul>
    <li>
      <a
        href="https://blog.voltathletics.com/home/2019/11/7/the-nature-nurture-debate-in-sports-are-athletes-born-or-built"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Nature-Nurture Debate in Sports: Are Athletes Born or Built?
      </a> - Volt Athletics Blog
    </li>
  </ul>
</section>
    </div>
  );
}

export default MadeOrBorn;
