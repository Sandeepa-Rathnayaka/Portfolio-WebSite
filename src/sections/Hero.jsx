import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { personal } from '../data/portfolio';
import './Hero.css';

const ROLES = personal.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(prev => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section className="hero grid-bg" id="hero">
      <div className="orb hero-orb-1" />
      <div className="orb hero-orb-2" />

      <div className="container hero-layout">

        {/* ── Left: text ── */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">{personal.name}</h1>

          <div className="hero-role-line">
            <span className="hero-role-prefix">{'// '}</span>
            <span className="hero-role-text">{displayed}</span>
            <span className="hero-cursor" />
          </div>

          <p className="hero-bio">{personal.bio}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'}); }}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); }}>
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={`mailto:${personal.email}`} aria-label="Email"><Mail size={20} /></a>
            <a href={`tel:${personal.phone}`} aria-label="Phone"><Phone size={20} /></a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Research Papers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring" />
          <div className="hero-photo-border">
            <img
              src="/profile1.jpeg"
              alt="Sandeepa Rathnayaka"
              className="hero-photo"
            />
          </div>
          <div className="hero-photo-badge">
            <span>👋</span> Hi there!
          </div>
        </div>

      </div>

      <a href="#about" className="hero-scroll" onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({behavior:'smooth'}); }}>
        <ArrowDown size={18} />
        <span>Scroll</span>
      </a>
    </section>
  );
}