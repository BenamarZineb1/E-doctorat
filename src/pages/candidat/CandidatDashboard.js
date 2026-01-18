import React from "react";
import LayoutCandidat from "./LayoutCandidat";
import InfoTab from "./InfoTab";
// Ce fichier peut servir de page d'accueil ou de wrapper
export default function CandidatDashboard() {
  return (
    <LayoutCandidat>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 style={{ color: "#003366" }}>Bienvenue sur votre espace Candidat</h2>
        <p>Veuillez utiliser le menu à gauche pour compléter votre dossier.</p>
      </div>
    </LayoutCandidat>
  );
}