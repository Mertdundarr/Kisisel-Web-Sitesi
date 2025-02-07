import React, { useState } from 'react';
import '../css/Header.css';


function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "TR" : "EN");
  };

  // Dil metinleri
  const translations = {
    EN: {
      skills: "Skills",
      projects: "Projects",
      hireMe: "Hire Me",
      switchLanguage: "SWITCH TO TURKISH",
      darkMode: "Dark Mode",
    },
    TR: {
      skills: "Becerilerim",
      projects: "Projelerim",
      hireMe: "Beni İşe Al",
      switchLanguage: "TÜRKÇE'YE GEÇ",
      darkMode: "Karanlık Mod",
    },
  };

  const t = translations[language];

  return (
    <div className={`header ${darkMode ? "dark" : ""}`}>
      <div className="top-settings">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider"></span>
        </label>
        <span>{t.darkMode}</span>
        <div className="divider"></div>
        <span className="language-toggle" onClick={toggleLanguage}>
          {t.switchLanguage}
        </span>
      </div>

      <div className="navigation-container">
        <div className="logo">M</div>
        <nav className="navigation">
          <a href="#skills">{t.skills}</a>
          <a href="#projects">{t.projects}</a>
          <button className="hire-me">{t.hireMe}</button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
