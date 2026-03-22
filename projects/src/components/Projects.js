import React from "react";

function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description: "A comprehensive LifeOS dashboard to manage daily tasks, track habits, and boost personal productivity.",
      link: "https://github.com/Beza-12/lifeos-dashboard",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      )
    },
    {
      title: "Student Information Hub",
      description: "A capstone project providing a centralized hub for university students to access important information and resources.",
      link: "https://github.com/Beza-12/capstone-project",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Exchange Rate App",
      description: "A frontend application that provides real-time currency exchange rates and seamless conversion tools.",
      link: "https://github.com/Beza-12/ISHub_AAU_Frontend/tree/main/exchange-rate",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    {
      title: "Dynamic To-Do List",
      description: "An interactive and dynamic JavaScript-based to-do list for efficient task tracking and management.",
      link: "https://github.com/Beza-12/dynamic-to-do-list-js",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6h13"/>
          <path d="M8 12h13"/>
          <path d="M8 18h13"/>
          <circle cx="3.5" cy="6" r="1.5" />
          <circle cx="3.5" cy="12" r="1.5" />
          <circle cx="3.5" cy="18" r="1.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">
        <span className="yellow">My</span> <span className="black-under">Projects</span>
      </h2>
      
      <div className="services-grid">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="service-card" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="service-icon-wrapper">
              {project.icon}
            </div>
            <h3>{project.title}</h3>
            <p style={{ fontSize: '0.85rem', marginTop: '10px', color: '#666', textAlign: 'center', lineHeight: '1.4' }}>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
