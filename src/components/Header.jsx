import React, { useState } from 'react';
import '../css/Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'TR' : 'EN');
  };

  return (
    <div className="header">
      <div className="top-settings">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
        <span>Dark Mode</span>
        <div className="divider"></div>
        <span className="turkish" onClick={toggleLanguage}>
          {language === 'EN' ? "TÜRKÇE'YE GEÇ" : 'SWITCH TO ENGLISH'}
        </span>
      </div>
      <div className="navigation-container">
        <div className="logo">M</div>
        <nav className="navigation">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <button className="hire-me">Hire me</button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
