import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:contacto@ejemplo.com" className="footer-link">contacto@ejemplo.com</a></p>
          <p>Teléfono: <a href="tel:+123456789" className="footer-link">+1 234 567 89</a></p>
          <p>
            Redes Sociales:
            <a href="https://www.facebook.com/feriakokoro" target="_blank" rel="noopener noreferrer" className="footer-link"> Facebook</a> | 
            <a href="https://www.instagram.com/feriakokoro" target="_blank" rel="noopener noreferrer" className="footer-link"> Instagram</a>
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
