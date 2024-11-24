import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div id="app">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main content (Home) */}
      <main className="main-content">
        <Home />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
