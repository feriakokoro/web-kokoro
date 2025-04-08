import React from "react";
import "../assets/styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:contacto@ejemplo.com" className="footer-link">feriakokoro@gmail.com</a></p>
          <p>
            Redes Sociales:
            <a href="https://www.instagram.com/feriakokoro" target="_blank" rel="noopener noreferrer" className="footer-link"> Instagram</a> |
            <a href="https://www.tiktok.com/@feria.kokoro" target="_blank" rel="noopener noreferrer" className="footer-link"> TikTok</a>
          </p>
        </div>
        <div className="footer-rights">
          <p>&copy; {new Date().getFullYear()} Feria Kokoro - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
