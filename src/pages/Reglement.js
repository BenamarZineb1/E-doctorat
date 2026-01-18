// src/pages/Reglement.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";

export default function Reglement() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section style={{ padding: "40px 20px", textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <button 
            onClick={() => navigate(-1)} 
            style={{ display: "flex", alignItems: "center", background: "none", border: "none", color: "#003366", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
          >
            <FaArrowLeft style={{ marginRight: "8px" }} /> Retour
          </button>
        </div>
        <h1 style={{ color: "#003366", fontSize: "32px" }}>Règlement</h1>
        <p>Consultez le règlement et les directives pour les doctorants.</p>
      </section>
    </>
  );
}
