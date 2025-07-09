import React, { useState } from "react";
import GameCard from "../components/GameCard";
import mockGames from "../data/mockGames";
import "./Catalog.css";

function Catalog() {
  const [search, setSearch] = useState("");

  const filteredGames = mockGames.filter((game) => {
    const lower = search.toLowerCase();
    return (
      game.title.toLowerCase().includes(lower) ||
      (game.genre && game.genre.toLowerCase().includes(lower)) ||
      (game.author && game.author.toLowerCase().includes(lower))
    );
  });

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de Jogos Indies</h1>
      <p className="catalog-subtitle">
        Descubra, avalie e compartilhe os melhores jogos indies!
      </p>

      <div className="catalog-search-wrapper">
        <span className="catalog-search-icon">
          <svg width="19" height="19" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="#b7b9d5" strokeWidth="2"/>
            <line x1="16.2" y1="16.2" x2="21" y2="21" stroke="#b7b9d5" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <input
          className="catalog-search"
          type="text"
          placeholder="Buscar por título, gênero ou autor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="catalog-grid">
        {filteredGames.length === 0 ? (
          <div className="catalog-empty">Nenhum jogo encontrado.</div>
        ) : (
          filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))
        )}
      </div>
    </div>
  );
}

export default Catalog;