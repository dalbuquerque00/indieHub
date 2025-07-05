// src/components/GameCard.jsx

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.cover} alt={game.title} className="game-card__cover" />
      <h3 className="game-card__title">{game.title}</h3>
      <p className="game-card__genre">{game.genre}</p>
      <p className="game-card__description">{game.description}</p>
      <p className="game-card__author">Desenvolvedor: {game.author}</p>
    </div>
  );
}

export default GameCard;