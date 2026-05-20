import React from "react";
import { MapPin, GraduationCap, Award, Code2 } from "lucide-react";
import { personal, education, certifications } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import "./About.css";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className={`about-grid ${inView ? "in-view" : ""}`}>
          {/* Left */}
          <div className="about-left">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting digital experiences with precision
            </h2>
            <p className="about-bio">
              I'm a Software Engineer with a strong background in both Quality
              Assurance and Fullstack Development. My passion lies at the
              intersection of building robust web applications and ensuring they
              work flawlessly.
            </p>
            <p className="about-bio">
              I hold a BSc. (Hons) in Information Technology from SLIIT, where I
              gained hands-on experience developing enterprise applications,
              conducting AI/ML research, and delivering production-grade
              software while maintaining the highest quality standards.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <MapPin size={16} className="about-icon" />
                <div>
                  <span className="about-info-label">Location</span>
                  <span className="about-info-val">Sri Lanka</span>
                </div>
              </div>
              <div className="about-info-item">
                <Code2 size={16} className="about-icon" />
                <div>
                  <span className="about-info-label">Focus</span>
                  <span className="about-info-val">Fullstack + QA + AI/ML</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="about-right">
            {/* Education */}
            <div className="about-card card">
              <div className="about-card-header">
                <GraduationCap size={18} className="about-card-icon" />
                <span>Education</span>
              </div>
              {education.map((e, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-period">{e.period}</div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-spec">{e.specialization}</div>
                  <div className="edu-inst">{e.institution}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="about-card card">
              <div className="about-card-header">
                <Award size={18} className="about-card-icon" />
                <span>Certifications</span>
              </div>
              <div className="cert-list">
                {certifications.map((c, i) => (
                  <div key={i} className="cert-item">
                    <div className="cert-dot" />
                    <div>
                      <div className="cert-name">{c.name}</div>
                      <div className="cert-meta">
                        {c.issuer} · {c.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
