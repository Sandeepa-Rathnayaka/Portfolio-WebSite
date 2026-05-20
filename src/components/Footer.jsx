import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="nav-logo-bracket">&lt;</span>SR<span className="nav-logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          © {year} Sandeepa Rathnayaka. Crafted with passion in Sri Lanka 🇱🇰
        </p>
        <div className="footer-socials">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${personal.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
