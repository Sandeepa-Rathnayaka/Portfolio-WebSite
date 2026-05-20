import React, { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Projects.css';

export default function Projects() {
  const [ref, inView] = useInView();
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);
  const visible = showAll ? projects : featured;

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <p className="section-label">Projects</p>
        <div className="projects-header">
          <h2 className="section-title">Things I've built</h2>
          <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : `Show All (${projects.length})`}
          </button>
        </div>

        <div className={`projects-grid ${inView ? 'in-view' : ''}`}>
          {visible.map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, delay }) {
  return (
    <div className="project-card card" style={{ transitionDelay: `${delay}s` }}>
      <div className="project-card-top">
        <div className="project-type-badge">
          <span>{p.type}</span>
        </div>
        {p.featured && (
          <div className="project-featured">
            <Star size={12} fill="currentColor" /> Featured
          </div>
        )}
      </div>

      <h3 className="project-title">{p.title}</h3>
      <p className="project-subtitle">{p.subtitle}</p>
      <p className="project-desc">{p.desc}</p>

      <div className="project-tags">
        {p.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
      </div>

      {p.links.length > 0 && (
        <div className="project-links">
          {p.links.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noreferrer" className="project-link">
              {l.label.toLowerCase().includes('github') ? <Github size={14} /> : <ExternalLink size={14} />}
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
