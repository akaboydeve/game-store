// GameDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import games from "../data"; // Import data from data.js
import "./GameDetails.css";

function GameDetails() {
  const { id } = useParams(); // Get the game ID from the URL parameter
  const game = games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div className="error">Game not found!</div>;
  }

  return (
    <div className="game-details">
      <div className="game-image">
        <img src={game.image} alt={game.title} />
      </div>
      <div className="game-info">
        <h2>{game.title}</h2>
        <p className="elaborated-description">{game.elaboratedDescription}</p> {/* Updated with detailed description */}
        
        <p className="description">{game.description}</p> {/* Original short description */}
        <p className="status">
          <strong>Status:</strong> {game.status}
        </p>

        {/* Render download link if available */}
        {game.downloadLink ? (
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            Download Now
          </a>
        ) : (
          <p className="no-download">Download link will be available soon.</p>
        )}

        {/* Render screenshots */}
        <div className="screenshots">
          {game.screenshots && game.screenshots.map((screenshot, index) => (
            <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="screenshot" />
          ))}
        </div>

        <button className="back-button" onClick={() => window.history.back()}>
          Back to Games
        </button>
      </div>
    </div>
  );
}

export default GameDetails;
