import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.contact}>
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:contacto@ejemplo.com" style={styles.link}>contacto@ejemplo.com</a></p>
          <p>Teléfono: <a href="tel:+123456789" style={styles.link}>+1 234 567 89</a></p>
          <p>
            Redes Sociales: 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}> Facebook</a> | 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}> Instagram</a>
          </p>
        </div>
        <div style={styles.rights}>
          <p>&copy; {new Date().getFullYear()} Feria Kokoro - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%",
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0",
    fontSize: "14px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  contact: {
    marginBottom: "15px",
  },
  link: {
    color: "#4DB6AC",
    textDecoration: "none",
    marginLeft: "5px",
  },
  rights: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "10px",
    width: "100%",
    textAlign: "center",
  },
};

export default Footer;

