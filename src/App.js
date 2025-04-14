import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Contests from "./pages/Contests";
//import Guests from "./pages/Guests";
//import Stands from "./pages/Stands";
import Gallery from "./pages/Gallery";
import Participants from "./pages/Participants";

import "./App.css";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <main style={{ flex: 1, paddingBottom: "50px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/participants" element={<Participants />} />
            {/*<Route path="/guests" element={<Guests />} />
            <Route path="/stands" element={<Stands />} />*/}
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
