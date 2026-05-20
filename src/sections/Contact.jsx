import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <div className={`contact-grid ${inView ? 'in-view' : ''}`}>
          {/* Left */}
          <div className="contact-left">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's work together</h2>
            <p className="contact-desc">
              I'm currently open to new opportunities. Whether you have a project in mind, 
              a question, or just want to connect — my inbox is always open.
            </p>

            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link">
                <Mail size={18} />
                <div>
                  <span className="cl-label">Email</span>
                  <span className="cl-val">{personal.email}</span>
                </div>
              </a>
              <a href={`tel:${personal.phone}`} className="contact-link">
                <Phone size={18} />
                <div>
                  <span className="cl-label">Phone</span>
                  <span className="cl-val">{personal.phone}</span>
                </div>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <Linkedin size={18} />
                <div>
                  <span className="cl-label">LinkedIn</span>
                  <span className="cl-val">sandeepa-rathnayaka</span>
                </div>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
                <Github size={18} />
                <div>
                  <span className="cl-label">GitHub</span>
                  <span className="cl-val">Sandeepa-Rathnayaka</span>
                </div>
              </a>
              <div className="contact-link">
                <MapPin size={18} />
                <div>
                  <span className="cl-label">Location</span>
                  <span className="cl-val">Sri Lanka 🇱🇰</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-right">
            <div className="contact-form-card card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    className="form-input"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <Send size={16} />
                  {sent ? 'Opening mail client...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
