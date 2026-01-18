import React from "react";
import LayoutCandidat, { commonStyles } from "./LayoutCandidat";
import { FaTrash, FaCheckCircle, FaUpload } from "react-icons/fa";

export default function MesCandidatures() {
  return (
    <LayoutCandidat>
      <div style={commonStyles.card}>
        <h2 style={commonStyles.title}>Mes Choix de Sujets</h2>

        {/* Item 1 */}
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px", backgroundColor: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
             <div>
                <h4 style={{ color: "#003366", margin: "0 0 10px 0" }}>Sujet : Analyse prédictive Big Data</h4>
                <p style={{ margin: "5px 0", color: "#555" }}><strong>Professeur :</strong> Amine OMOR</p>
                <p style={{ margin: "5px 0", color: "#555" }}><strong>Axe/Thème :</strong> Big Data & IA</p>
             </div>
             <div style={{ textAlign: "right" }}>
                <span style={{ background: "#e8f5e9", color: "#2e7d32", padding: "5px 10px", borderRadius: "15px", fontSize: "12px", fontWeight: "bold" }}>
                  Choix enregistré
                </span>
             </div>
          </div>

          <div style={{ marginTop: "15px", padding: "15px", background: "#f8f9fa", borderRadius: "6px", border: "1px dashed #bbb" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "600", marginBottom: "10px" }}>
              <FaUpload /> Importer votre projet de thèse (PDF) :
            </label>
            <input type="file" accept=".pdf" />
          </div>

          <div style={{ marginTop: "15px", display: "flex", gap: "15px" }}>
            <button style={commonStyles.btnDanger}>
              <FaTrash style={{ marginRight: "5px" }} /> Supprimer de mes choix
            </button>
            <button style={commonStyles.btnSuccess}>
              <FaCheckCircle style={{ marginRight: "5px" }} /> Confirmer le projet
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px", backgroundColor: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
             <div>
                <h4 style={{ color: "#003366", margin: "0 0 10px 0" }}>Sujet : Optimisation des réseaux de neurones</h4>
                <p style={{ margin: "5px 0", color: "#555" }}><strong>Professeur :</strong> Nour Eddine EL KANT</p>
             </div>
          </div>
          <div style={{ marginTop: "15px", padding: "15px", background: "#f8f9fa", borderRadius: "6px", border: "1px dashed #bbb" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "600", marginBottom: "10px" }}>
              <FaUpload /> Importer votre projet de thèse (PDF) :
            </label>
            <input type="file" accept=".pdf" />
          </div>
          <div style={{ marginTop: "15px", display: "flex", gap: "15px" }}>
            <button style={commonStyles.btnDanger}><FaTrash /> Supprimer</button>
            <button style={commonStyles.btnSuccess}><FaCheckCircle /> Confirmer</button>
          </div>
        </div>

      </div>
    </LayoutCandidat>
  );
}