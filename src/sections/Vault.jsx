import React from 'react';
import './Vault.css';

function Extras() {
  const artifacts = [
    'Pokedex',
    'CSS Animation',
    'AI Mockup Tutorial',
    'Garden Planner Prototype',
    'Parallax Effects'
  ];

  const timeline = [
    '2025', '2024', '2023', '2022', '2021',
    '2020', '2019', '2018', '2017', '2016'
  ];

  const totalExtras = artifacts.length + timeline.length;

  return (
    <section className="vault-wrapper">
      <div className="vault-header">
        <h2 className="vault-title">Vault</h2>
        <span className="vault-count">({totalExtras} items)</span>
      </div>

      {/* Artifacts Section */}
      <div className="vault-row">
        <div className="vault-label">Artifacts</div>
        <div className="vault-list">
          {artifacts.map((item, i) => (
            <div className="vault-item" key={`artifact-${i}`}>
              <a href="#">{item}</a>
              <div className="vault-divider" />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="vault-row">
        <div className="vault-label">Timeline</div>
        <div className="vault-list">
          {timeline.map((year, i) => (
            <div className="vault-item" key={`year-${i}`}>
              <a href="#">{year}</a>
              <div className="vault-divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Extras;
