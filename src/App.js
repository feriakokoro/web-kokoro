import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Guests from "./components/Guests";
import Schedule from "./components/Schedule";
import Contests from "./components/Contests";
import Stands from "./components/Stands";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1, paddingBottom: "50px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/stands" element={<Stands />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contests" element={<Contests />} /> 
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;