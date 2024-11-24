import React from "react";
import "./GameCard.css";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} className="game-image" />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <p className="game-status">{game.status}</p> {/* New status field */}
        <a href={game.link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default GameCard;
