import React from "react";
import "../assets/styles/footer.css";
import { FOOTER } from "../utils/constants";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>{FOOTER.CONTACT_TITLE}</h3>

          <a
            href="https://www.tiktok.com/@kokoroproducciones"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="TikTok"
          >
            <FaTiktok size="2.0rem" className="footer-icon" />
          </a>

          <a
            href="https://www.instagram.com/kokoro.producciones"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Instagram"
          >
            <FaInstagram size="2.0rem" className="footer-icon" />
          </a>
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
