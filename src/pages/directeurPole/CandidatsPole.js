import React from "react";
import { FaEye } from "react-icons/fa";

export default function CandidatsPole() {
  // Mock Data
  const candidats = [
    { id: 1, cne: "1111222", nom: "Guennoun", prenom: "Abdellah", sujet: "Analyse prédictive Big Data", prof: "OMOR Amine", labo: "LIA", parcours: "DUT + Lic + Master" },
    { id: 2, cne: "R130001", nom: "Benamar", prenom: "Zineb", sujet: "Optimisation réseaux", prof: "EL KANT Nour", labo: "LIA", parcours: "Cycle Ingénieur" },
    { id: 3, cne: "E14555", nom: "Tazi", prenom: "Karim", sujet: "Sécurité IoT", prof: "SANI Karim", labo: "LSD", parcours: "DUT + Lic + Cycle" },
  ];

  return (
    <div>
      <h2 style={{ color: "#003366" }}>Liste des Candidats</h2>
      <div style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f1f3f5", color: "#333" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left" }}>CNE</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Nom Prénom</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Sujet Choisi</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Directeur</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Parcours (Validation)</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidats.map(c => (
              <tr key={c.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px" }}>{c.cne}</td>
                <td style={{ padding: "12px", fontWeight: "bold" }}>{c.nom.toUpperCase()} {c.prenom}</td>
                <td style={{ padding: "12px" }}>{c.sujet}</td>
                <td style={{ padding: "12px" }}>{c.prof}</td>
                <td style={{ padding: "12px" }}>
                  <span style={{ fontSize: "12px", background: "#d4edda", color: "#155724", padding: "3px 8px", borderRadius: "10px" }}>
                    {c.parcours}
                  </span>
                </td>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  <button style={{ background: "none", border: "1px solid #003366", color: "#003366", padding: "5px 10px", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>
                    <FaEye /> Voir Dossier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}