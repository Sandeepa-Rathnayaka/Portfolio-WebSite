import React from 'react';
import { Briefcase, Shield, Code } from 'lucide-react';
import { experience } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Experience.css';

const TypeIcon = ({ type }) => {
  if (type === 'QA') return <Shield size={14} />;
  return <Code size={14} />;
};

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section className="section exp-section" id="experience" ref={ref}>
      <div className="orb exp-orb" />
      <div className="container">
        <p className="section-label">Work Experience</p>
        <h2 className="section-title" style={{marginBottom: '48px'}}>Where I've worked</h2>

        {experience.map((job, ji) => (
          <div key={ji} className={`exp-job ${inView ? 'in-view' : ''}`} style={{transitionDelay: `${ji * 0.1}s`}}>
            <div className="exp-job-header">
              <div className="exp-company-logo">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="exp-role">{job.role}</h3>
                <div className="exp-meta">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-dot">·</span>
                  <span className="exp-period">{job.period}</span>
                </div>
              </div>
            </div>

            <div className="exp-items">
              {job.items.map((item, ii) => (
                <div key={ii} className="exp-item card" style={{transitionDelay: `${(ji + ii * 0.1) * 0.15}s`}}>
                  <div className="exp-item-type">
                    <TypeIcon type={item.type} />
                    <span>{item.type === 'QA' ? 'Quality Assurance' : 'Development'}</span>
                  </div>
                  <h4 className="exp-item-title">{item.title}</h4>
                  <p className="exp-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
