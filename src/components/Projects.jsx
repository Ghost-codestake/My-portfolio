import { Computer, ExternalLink } from "lucide-react";
import Project1 from "../assets/Postivous.jpg";
import Project2 from "../assets/Fintrck App light.png";
import Project3 from "../assets/Danfoo.png";
import Project4 from "../assets/My Potfolio.png";
import Project5 from "../assets/techhive.png";

const Projects = () => {
  const projects = [
    {
      title: "SEO Company Landing page",
      description:
        "Postivous is a modern, responsive landing page built for an SEO agency. ",
      tech: ["Html", "CSS", "JavaScript"],
      image: Project1,
      liveDemo: "https://postivous.vercel.app/",
      github: "#",
    },
    {
      title: "A Financial Tracking Web App",
      description:
        " FinTrack is a web application that helps users track income and expenses and visualize spending habits.",
      tech: ["JavaScript", "CSS", "Html"],
      image: Project2,
      liveDemo: "https://fin-track-eight-sepia.vercel.app/",
      github: "https://github.com/Ghost-codestake/FinTrack",
    },
    {
      title: "TechHive",
      description:
        "A collaborative project for a  modern tech school for beginners and intermediate developers and resource hub.",
      tech: ["React", "CSS", "JavaScript"],
      image: Project5,
      liveDemo: "https://techhive.lss.ng/",
      github: "https://github.com/Bashoroon/techhive-webiste",
    },
    {
      title: "Automated Passenger Transport System App",
      description: "Danfoo APTS is a web-based bus booking platform",
      tech: ["React", "Local Storage", "Sass"],
      image: Project3,
      liveDemo: "https://danfoo-mvp-frontend.vercel.app/",
      github: "https://github.com/Ghost-codestake/Danfoo-booking",
    },
    {
      title: "Portfolio Template",
      description:
        "Responsive portfolio showcasing all my projects, intrest, how to contact me and my skills.",
      tech: ["React", "CSS", "JavaScript"],
      image: Project4,
      liveDemo: "#",
      github: "https://github.com/Ghost-codestake/My-portfolio",
    },
  ];
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} className="project-link">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link">
                    <Computer size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
