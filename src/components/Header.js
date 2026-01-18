// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img src="/logo-usmba.png" alt="USMBA" style={{ height: "50px" }} />
        <h1 style={{ color: "#fff" }}>e-Doctorat USMBA</h1>
      </div>
      <nav>
        <Link to="/" style={linkStyle}>Accueil</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/login" style={linkStyle}>Connexion</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 50px",
  backgroundColor: "#003366",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const linkStyle = { color: "#fff", marginLeft: "20px", textDecoration: "none", fontWeight: "bold" };

export default Header;
