// Home.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import games from "../data"; // Import data from data.js
import GameCard from "../components/GameCard"; // Assuming you have a GameCard component
import "./Home.css";

function Home() {
  return (
    <section id="games" className="home">
      <h2>Our Games</h2>
      <div className="game-list">
        {games.map((game) => (
          <Link key={game.id} to={`/game/${game.id}`}> {/* Add Link with the dynamic route */}
            <GameCard game={game} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
