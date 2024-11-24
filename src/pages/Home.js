import React from "react";
import GameCard from "../components/GameCard";
import "./Home.css";

const games = [
  {
    id: 1,
    title: "Mination",
    description: "An open-world simulator game. Explore, create, and survive!",
    image: "assets/mination.jpg",
    link: "https://example.com/mination",
    status: "Available on Windows",
  },
  {
    id: 2,
    title: "MiniTankWars",
    description: "A 2D multiplayer tank battle game. Join the fun!",
    image: "assets/minitankwars.jpg",
    link: "https://example.com/minitankwars",
    status: "Coming Soon to Android & iOS",
  },
  {
    id: 3,
    title: "Dog Runner",
    description: "Help the dog collect items and complete levels in this 2D platformer!",
    image: "assets/dogracer.jpg",
    link: "https://example.com/dogracer",
    status: "Available on Web Browser",
  },
];

function Home() {
  return (
    <section id="games" className="home">
      <h2>Our Games</h2>
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default Home;
