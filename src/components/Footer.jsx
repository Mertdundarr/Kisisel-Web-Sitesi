import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-text">Bir sonraki ürününüz üzerinde <br/> birlikte çalışalım.</p>
        <a href="mailto:almilasuccode@gmail.com" className="footer-email">
          👉 mertdundarrr@gmail.com
        </a>
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">Personal Blog</a>
        <a href="https://github.com/Mertdundarr" className="footer-link">Github</a>
        <a href="https://www.linkedin.com/in/mert-d%C3%BCndar-1504b627b/" className="footer-link">Linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;
