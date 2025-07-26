import React from "react";
import "../assets/styles/footer.css";
import { FOOTER } from "../utils/constants";
const footerData = require("../data/footer.json");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>{FOOTER.CONTACT_TITLE}</h3>
          <p>
            {FOOTER.CONTACT_EMAIL}
            <a href="mailto:contacto@ejemplo.com" className="footer-link">
              {footerData.email}
            </a>
          </p>
          <p>
            {FOOTER.SOCIAL_MEDIA}
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
            &copy; {new Date().getFullYear()} {FOOTER.DISCLAIMER}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
