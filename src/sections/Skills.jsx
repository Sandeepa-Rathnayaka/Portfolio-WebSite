import React from 'react';
import { skills } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const categoryIcons = {
  "Web Development": "🌐",
  "AI / ML": "🤖",
  "Mobile": "📱",
  "Databases": "🗄️",
  "Languages": "⌨️",
  "Tools & IDEs": "🛠️",
  "QA": "✅",
};

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="orb skills-orb" />
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title" style={{marginBottom: '48px'}}>My tech stack</h2>

        <div className={`skills-grid ${inView ? 'in-view' : ''}`}>
          {Object.entries(skills).map(([cat, items], ci) => (
            <div key={cat} className="skill-cat card" style={{transitionDelay: `${ci * 0.07}s`}}>
              <div className="skill-cat-header">
                <span className="skill-cat-emoji">{categoryIcons[cat] || '💡'}</span>
                <span className="skill-cat-name">{cat}</span>
              </div>
              <div className="skill-tags">
                {items.map((s, si) => (
                  <span key={si} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
