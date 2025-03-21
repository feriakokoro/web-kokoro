import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>🎌 ¡Feria Kokoro 2025! 🎌</h1>
          <p style={styles.subtitle}>
            El evento más kawaii de anime, manga, cosplay y cultura geek.  
            🌸 ¡Vive la experiencia única! 🌸
          </p>
          <button style={styles.button}>¡Compra tu Entrada!</button>
        </div>
      </section>

      {/* Sección de Información */}
      <section style={styles.info}>
        <h2 style={styles.sectionTitle}>🎭 Actividades Imperdibles 🎭</h2>
        <ul style={styles.list}>
          <li>🌸 Desfile y concursos de Cosplay</li>
          <li>🛍️ Stands con productos exclusivos</li>
          <li>🎤 Invitados especiales y paneles</li>
          <li>🎮 Zona gamer con torneos épicos</li>
          <li>🍜 Gastronomía temática japonesa</li>
        </ul>
      </section>

      {/* Ubicación */}
      <section style={styles.location}>
        <h2 style={styles.sectionTitle}>📍 Ubicación 📍</h2>
        <p>📅 Fecha: 12 y 13 de Octubre 2025</p>
        <p>📍 Lugar: Centro de Convenciones Kokoro, Buenos Aires</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    background: "#fce4ec", // Fondo rosa pastel suave
    color: "#333",
  },
  hero: {
    position: "relative",
    height: "80vh",
    background: "url('https://images6.alphacoders.com/756/756831.jpg') center/cover no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 192, 203, 0.5)", // Superposición rosa pastel translúcida
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "600px",
    padding: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Sombra sutil para mejorar la visibilidad
  },
  title: {
    fontSize: "3em",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2em",
    margin: "10px 0",
  },
  button: {
    background: "#ff4081",
    color: "#fff",
    padding: "12px 24px",
    fontSize: "1.2em",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    background: "#d81b60",
  },
  info: {
    marginTop: "40px",
    padding: "20px",
    background: "#fff3e0",
    borderRadius: "10px",
  },
  sectionTitle: {
    fontSize: "2em",
    color: "#ff4081",
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.2em",
  },
  location: {
    marginTop: "40px",
    padding: "20px",
    background: "#e1bee7",
    borderRadius: "10px",
  },
};

export default Home;
