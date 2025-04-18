import React from "react";
import "../assets/styles/footer.css";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/feriakokoro",
    ariaLabel: "Instagram de Feria Kokoro",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@feria.kokoro",
    ariaLabel: "TikTok de Feria Kokoro",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>
            Email:
            <a href="mailto:contacto@ejemplo.com" className="footer-link">
              feriakokoro@gmail.com
            </a>
          </p>
          <p>
            Redes Sociales:
            {socialLinks.map((link, index) => (
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
                {index < socialLinks.length - 1 ? " | " : ""}
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
