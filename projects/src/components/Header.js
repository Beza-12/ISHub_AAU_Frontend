import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        BEZAWIT <span>HAILE</span>
      </div>
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">MY PROJECTS</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
      {/* Social Icons Sidebar */}
      <div className="social-sidebar">
        <a href="#" className="social-icon" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
        <a href="#" className="social-icon" aria-label="Twitter">
          <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
        </a>
        <a href="#" className="social-icon" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
