import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="nav-logo" onClick={e => handleLink(e, '#hero')}>
          <span className="nav-logo-bracket">&lt;</span>
          SR
          <span className="nav-logo-bracket">/&gt;</span>
        </a>

        <ul className="nav-links desktop">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:sandeeparathnayaka20@gmail.com" className="btn btn-primary nav-cta">
          Hire Me
        </a>

        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="mailto:sandeeparathnayaka20@gmail.com" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
