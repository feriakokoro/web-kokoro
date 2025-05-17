import React from "react";
import "../assets/styles/footer.css";

const footerData = require("../data/footer.json");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>
            Email:
            <a href="mailto:contacto@ejemplo.com" className="footer-link">
              {footerData.email}
            </a>
          </p>
          <p>
            Redes Sociales:
            {footerData.socialLinks.map((link, index) => (
              <span key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label={link.ariaLabel}
                >
                  {link.name}
                </a>
                {index < footerData.socialLinks.length - 1 ? " | " : ""}
              </span>
            ))}
          </p>
        </div>
        <div className="footer-rights">
          <p>
            &copy; {new Date().getFullYear()} Feria Kokoro - Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
