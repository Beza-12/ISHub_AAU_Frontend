import React from "react";

function Skills() {
  const skills = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15c-1.33 3.33-4.4 5.2-7.4 5.2-3 0-6.07-1.87-7.4-5.2M4.6 9c1.33-3.33 4.4-5.2 7.4-5.2 3 0 6.07 1.87 7.4 5.2" />
          <path d="M15 19.4c3.33-1.33 5.2-4.4 5.2-7.4 0-3-1.87-6.07-5.2-7.4M9 4.6c-3.33 1.33-5.2 4.4-5.2 7.4 0 3 1.87 6.07 5.2 7.4" />
        </svg>
      )
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16v16H4z" />
          <path d="M10 16.5c-1 1-2.5 1-3.5 0M10 8v8.5M19 14.5c0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5 1-2 3-2.5-3-1-3-2.5 1.5-2.5 3-2.5 3 1 3 2.5" />
        </svg>
      )
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.5 5.5A3.5 3.5 0 019 2h6a3.5 3.5 0 010 7H9A3.5 3.5 0 015.5 5.5z" />
          <path d="M5.5 12.5A3.5 3.5 0 019 9h6a3.5 3.5 0 010 7H9A3.5 3.5 0 015.5 12.5z" />
          <path d="M15 9a3.5 3.5 0 010 7H9" />
          <path d="M9 16v3.5A3.5 3.5 0 015.5 16H9z" />
        </svg>
      )
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 9v12A3 3 0 009 24h0" />
          <circle cx="18" cy="9" r="3" />
          <path d="M18 12V9" />
          <path d="M15.88 11.12L6 21.01" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" style={{ padding: "5rem 10%", backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <h2 className="section-title" style={{ textAlign: "center", marginLeft: "0", marginBottom: "3rem" }}>
        <span className="yellow">My</span> <span className="black-under">Skills</span>
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem", 
            width: "100px", transition: "transform 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ width: "50px", height: "50px", color: "#ffc107" }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#333" }}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
