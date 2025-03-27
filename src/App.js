import React from "react";

/*import * as ReactRouterDom from "react-router-dom";
const { BrowserRouter: Router, Routes, Route } = ReactRouterDom;*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Footer from "./components/Footer";
import Guests from "./components/Invitados";
import Schedule from "./components/Cronograma";
import Contests from "./components/Concursos";
import About from "./components/About";
import Home from "./components/Inicio";
import Stands from "./components/Stands";
import Navbar from "./components/Navbar";

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
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;