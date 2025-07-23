// src/components/ValueStatement.jsx
import React, { useState } from 'react';
import './ValueStatement.css';


const valueStatements = {
  default: [
    "The tech industry moves fast — and a lot of people rush in.",
    "I took a different path. I’ve worked real jobs in real environments, where the stakes weren’t hypothetical and the deadlines weren’t flexible.",
    "From construction sites to creative studios, I’ve lived through multiple industries and absorbed how people actually work.",
    "That hands-on experience gave me a broader lens — not just on what users need, but how teams succeed when things get tough.",
    "I’m new to development, but not new to pressure, ownership, or figuring things out when it counts. That’s the perspective I bring to the work."
  ],
  hiringManager: [
    "You're building a team — and that means finding people who take ownership, not just orders.",
    "I’ve spent years in environments where leadership and accountability weren’t optional.",
    "Deadlines, pressure, problem-solving — I’ve lived all of it, and I know how to show up when it matters.",
    "Now I’m applying that mindset to design and development. What I don’t know yet, I learn fast — and I own it all the way through."
  ],
  startupFounder: [
    "Startups move fast. You need people who can pivot, learn, and wear a dozen hats without losing focus.",
    "That’s how I’ve worked my whole life — stepping into new roles, figuring things out, and building forward.",
    "From trade work to UX thinking, I’ve carried the same instinct: understand the problem, take initiative, and make it better."
  ],
  developer: [
    <pre className="code-block">
  <code>
    <span className="comment">// Tech moves fast — most people just .join() and hope for the best</span>{'\n'}
    <span className="keyword">const</span> industry = <span className="string">"tech"</span>;{'\n'}
    <span className="keyword">const</span> newHires = Array(<span className="number">100</span>).fill({`{`} path: <span className="string">"typical"</span>, stressTested: <span className="keyword">false</span> {`}`});{'\n\n'}
    <span className="keyword">const</span> me = {'{'}{'\n'}
    &nbsp;&nbsp;path: <span className="string">"nonTraditional"</span>,{'\n'}
    &nbsp;&nbsp;industries: [<span className="string">"construction"</span>, <span className="string">"creative"</span>],{'\n'}
    &nbsp;&nbsp;pressureTested: <span className="keyword">true</span>,{'\n'}
    &nbsp;&nbsp;deadlines: <span className="string">"nonFlexible"</span>,{'\n'}
    &nbsp;&nbsp;users: <span className="string">"realPeople"</span>,{'\n'}
    &nbsp;&nbsp;understands: [<span className="string">"ownership"</span>, <span className="string">"adaptability"</span>, <span className="string">"urgency"</span>]{'\n'}
    {'}'};{'\n\n'}
    <span className="comment">// Real jobs &gt; hypothetical projects</span>{'\n'}
    <span className="keyword">if</span> (me.pressureTested && me.deadlines === <span className="string">"nonFlexible"</span>) {'{'}{'\n'}
    &nbsp;&nbsp;me.resilience = <span className="string">"earned"</span>;{'\n'}
    {'}'}{'\n\n'}
    <span className="keyword">const</span> perspective = perspectiveFromExperience(me.industries);{'\n\n'}
    <span className="comment">// I might be new to dev, but not to figuring things out when it matters</span>{'\n'}
    <span className="keyword">const</span> yearsOfCoding = <span className="number">1</span>;{'\n'}
    <span className="keyword">const</span> yearsOfProblemSolving = <span className="number">10</span>;{'\n\n'}
    <span className="keyword">const</span> impactReady = yearsOfCoding &lt; <span className="number">2</span> && yearsOfProblemSolving &gt;= <span className="number">10</span>;{'\n\n'}
    <span className="comment">// If the environment is chaotic, I don’t crash — I compile</span>{'\n'}
    <span className="keyword">const</span> thrivesUnderPressure = impactReady && me.pressureTested;{'\n\n'}
    <span className="comment">// Team value? If I reduce friction, return true</span>{'\n'}
    <span className="keyword">function</span> addsValue(team) {'{'}{'\n'}
    &nbsp;&nbsp;<span className="keyword">const</span> listens = <span className="keyword">true</span>;{'\n'}
    &nbsp;&nbsp;<span className="keyword">const</span> takesOwnership = <span className="keyword">true</span>;{'\n'}
    &nbsp;&nbsp;<span className="keyword">const</span> learnsFast = <span className="keyword">true</span>;{'\n\n'}
    &nbsp;&nbsp;<span className="keyword">return</span> listens && takesOwnership && learnsFast;{'\n'}
    {'}'}{'\n\n'}
    <span className="comment">// Summary</span>{'\n'}
    <span className="keyword">if</span> (thrivesUnderPressure && addsValue(<span className="string">"yours"</span>)) {'{'}{'\n'}
    &nbsp;&nbsp;console.log(<span className="string">"I'm ready. Let's ship something great."</span>);{'\n'}
    {'}'}
  </code>
</pre>
  ],
  creativeDirector: [
    "Design is only as good as the understanding behind it.",
    "I’ve spent years seeing how people actually interact with tools, environments, and each other.",
    "That experience shaped how I build — with empathy, clarity, and attention to the stuff most people miss."
  ]
};

function ValueStatement() {
  const [selected, setSelected] = useState('default');
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSelect = (key) => {
    setSelected(key);
    setHasInteracted(true);
  };

  const isFocused = selected !== 'default' || hasInteracted;

  return (
    <section className="value-section">

        <div className="identity-button-row">
          <div className="value-buttons">
            <button onClick={() => handleSelect('hiringManager')}>Hiring Manager</button>
            <button onClick={() => handleSelect('startupFounder')}>Startup Founder</button>
            <button className="default-button" onClick={() => handleSelect('default')}>Curious Visitor</button>
            <button onClick={() => handleSelect('developer')}>Developer</button>
            <button onClick={() => handleSelect('creativeDirector')}>Creative Director</button>
          </div>
        </div>
    

      <div
        className={`value-content ${isFocused ? 'focused' : ''}`}
        onMouseEnter={() => setHasInteracted(true)}
      >
        {valueStatements[selected].map((line, index) => (
          <p key={index} className="value-text">{line}</p>
        ))}
      </div>
    </section>
  );
}

export default ValueStatement;
