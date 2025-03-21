import React, { useState } from "react";

const guestsData = [
  { 
    id: 1,
    name: "John Doe",
    category: "cosplayers",
    image: "https://jigoku-random.com.ar/assets/images/invitados/domingo/cosplayer/camuy-valoy-jurado-de-cosplay.webp?v=0.17.0",
    tags: ["JURADO"],
    days: ["Domingo"],
    socialUrl: "https://www.instagram.com/camivaloy/"
  },
  {
    id: 2,
    name: "Jane Smith",
    category: "cosplayers",
    image: "https://jigoku-random.com.ar/assets/images/invitados/domingo/cosplayer/midra-knight-jurado-de-cosplay.webp?v=0.17.0",
    tags: ["JURADO", "CANTANTE"],
    days: ["Domingo"],
    socialUrl: "https://www.instagram.com/midraknight/"
  },
  {
    id: 3,
    name: "Carlos Pérez",
    category: "cosplayers",
    image: "https://jigoku-random.com.ar/assets/images/invitados/domingo/kpop/franhen-artista-y-jurado-de-fandancers.webp?v=0.17.0",
    tags: ["JURADO"],
    days: ["Domingo"],
    socialUrl: "https://www.instagram.com/imfranhen/"
  },
  { 
    id: 4,
    name: "John Doe",
    category: "cosplayers",
    image: "https://jigoku-random.com.ar/assets/images/invitados/domingo/cosplayer/camuy-valoy-jurado-de-cosplay.webp?v=0.17.0",
    tags: ["JURADO", "GAMER"],
    days: ["Domingo", "Sábado"],
    socialUrl: "https://www.instagram.com/camivaloy/"
  },
  {
    id: 5,
    name: "Jane Smith",
    bio: "Ingeniera de Software",
    category: "cosplayers",
    image: "https://jigoku-random.com.ar/assets/images/invitados/domingo/cosplayer/midra-knight-jurado-de-cosplay.webp?v=0.17.0",
    tags: ["JURADO"],
    days: ["Domingo"],
    socialUrl: "https://www.instagram.com/midraknight/"
  },
  {
    id: 6,
    name: "Carlos Pérez",
    bio: "Experto en UX/UI",
    category: "cosplayers",
    image: "https://jigoku-random.com.ar/assets/images/invitados/domingo/kpop/franhen-artista-y-jurado-de-fandancers.webp?v=0.17.0",
    tags: ["JURADO", "GAMER"],
    days: ["Domingo"],
    socialUrl: "https://www.instagram.com/imfranhen/"
  },
];

const Guests = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Obtener todos los tags sin duplicados
  const tags = [...new Set(guestsData.flatMap(guest => guest.tags))];

  // Filtrar los invitados según el tag seleccionado
  const filteredGuests = selectedTag 
    ? guestsData.filter(guest => guest.tags.includes(selectedTag)) 
    : guestsData;

  return (
    <div style={styles.container}>
      <h2>Invitados</h2>

      {/* Filtros de Tags */}
      <div style={styles.filters}>
        {tags.map((tag) => (
          <button
            key={tag}
            style={{
              ...styles.filterButton,
              backgroundColor: selectedTag === tag ? "#ff4081" : "#f0c9ff",
            }}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid de Tarjetas */}
      <div style={styles.grid}>
        {filteredGuests.map((guest) => (
          <a
            href={guest.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={guest.id}
            style={styles.card}
          >
            <img src={guest.image} alt={guest.name} style={styles.image} />
            <h3 style={styles.name}>{guest.name}</h3>
            <p style={styles.category}>{guest.category}</p>
            <div style={styles.tagsContainer}>
              {guest.days.map((day, index) => (
                <span key={index} style={styles.dayTag}>
                  {day}
                </span>
              ))}
            </div>
            <div style={styles.tagsContainer}>
              {guest.tags.map((tag, index) => (
                <span key={index} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center", backgroundColor: "#f9f3ff", borderRadius: "20px" },
  filters: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  filterButton: {
    backgroundColor: "#f0c9ff",
    color: "#333",
    border: "2px solid #ff4081",
    borderRadius: "15px",
    padding: "8px 20px",
    fontSize: "1em",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  grid: { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" },
  card: { 
    width: "200px", 
    padding: "15px", 
    border: "1px solid #ddd", 
    borderRadius: "15px", 
    textAlign: "center", 
    textDecoration: "none", 
    color: "#333", 
    backgroundColor: "#ffffff", 
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: { transform: "scale(1.05)" },
  image: { width: "100%", borderRadius: "10px" },
  name: { fontWeight: "bold", fontSize: "1.1em", margin: "10px 0", color: "#ff4081" },
  category: { color: "#ff4081", fontSize: "1em" },
  tagsContainer: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginTop: "10px" },
  dayTag: {
    backgroundColor: "#ff4081", 
    color: "white", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    fontSize: "0.9em"
  },
  tag: { 
    backgroundColor: "rgba(0, 0, 0, 0.1)", 
    color: "white", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    fontSize: "0.9em"
  },
};

export default Guests;
