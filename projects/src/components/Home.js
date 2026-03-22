import React from "react";
import profileImg from "./pp.png";

function Home() {
  return (
    <section id="home">
      <div className="hero-content">
        <p className="hello">Hello, I'm</p>
        <p className="name">Bezawit Haile</p>
        <h1 className="title">Front end developer</h1>
        <a href="/resume.pdf" download className="download-btn">
          Download Resume
        </a>
      </div>

      <div className="hero-image">
        {/* Placeholder for the portrait. Ideally replaced with an actual portrait in public/ folder */}
        <img
          src={profileImg}
          alt="Bezawit Haile Portrait"
          style={{ width: "400px", height: "auto", objectFit: "cover", borderRadius: "100px" }}
        />
      </div>
    </section>
  );
}

export default Home;
