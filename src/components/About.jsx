import React from "react";
import { Computer, Code, Database, Globe, Layers,Wind } from "lucide-react";

const About = () => {
  const techStack = [
    { name: "HTML", icon: <Globe size={40} />, color: "#E34F26" },
    { name: "CSS", icon: <Layers size={40} />, color: "#1572B6" },
    { name: "JavaScript", icon: <Code size={40} />, color: "#F7DF1E" },
    { name: "React", icon: <Database size={40} />, color: "#61DAFB" },
    { name: "Sass", icon: <Layers size={40} />, color: "#CC6699" },
    { name: "Bootstrap", icon: <Globe size={40} />, color: "#7952B3" },
    { name: "Tailwind CSS", icon: <Wind size={40} />, color: "#06B6D4" },
    { name: "Git", icon: <Computer size={40} />, color: "#F05032" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Front-End Developer with a love for creating
              beautiful, functional, and user-friendly websites.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, sharing knowledge with
              the community or playing games.
            </p>
          </div>
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="tech-card"
                  style={{ "--accent-color": tech.color }}
                >
                  <div className="tech-icon">{tech.icon}</div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
