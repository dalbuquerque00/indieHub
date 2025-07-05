// src/pages/Catalog.jsx
import mockGames from "../data/mockGames";

export default function Catalog() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Catálogo de Jogos Indie</h1>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {mockGames.map((game) => (
          <div key={game.id} style={{
            width: 220,
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            boxShadow: "0 2px 8px #0001"
          }}>
            <img src={game.cover} alt={game.title} style={{ width: "100%", borderRadius: 6 }} />
            <h3>{game.title}</h3>
            <p><b>Gênero:</b> {game.genre}</p>
            <p>{game.description}</p>
            <p style={{ fontSize: 12, color: "#555" }}>Autor: {game.author}</p>
            {/* Depois pode virar botão para ver detalhes */}
          </div>
        ))}
      </div>
    </div>
  );
}