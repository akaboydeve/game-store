// App.js
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {Helmet} from "react-helmet";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import react-router-dom
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Akaboydeve Game Store</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Akaboydeve Game Store" />
            </Helmet>
      <SpeedInsights />
      <Analytics />
        <Navbar />
        <Hero />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} /> {/* Route for game details */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
