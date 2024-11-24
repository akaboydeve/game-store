import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <p>Status: <strong>{game.status}</strong></p>
      <Link to={`/game/${game.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default GameCard;
