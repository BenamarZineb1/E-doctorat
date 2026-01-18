import React from "react";
import { FaFilePdf, FaCheck } from "react-icons/fa";

export default function InscriptionPole() {
  const inscrits = [
    { id: 1, nom: "GUENNOUN Abdellah", cne: "1111222", sujet: "Blockchain Medical", etat: "Inscrit", bourse: "Oui" },
    { id: 2, nom: "BENAMAR Zineb", cne: "R13000", sujet: "Optimisation AI", etat: "Inscrit", bourse: "Non" }
  ];

  return (
    <div>
      <h2 style={{ color: "#003366" }}>Inscriptions Finales</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <thead style={{ background: "#28a745", color: "#fff" }}>
          <tr>
            <th style={{ padding: "12px" }}>Nom Prénom</th>
            <th style={{ padding: "12px" }}>CNE</th>
            <th style={{ padding: "12px" }}>Sujet Affecté</th>
            <th style={{ padding: "12px" }}>État Inscription</th>
            <th style={{ padding: "12px" }}>Demande Bourse</th>
            <th style={{ padding: "12px" }}>Documents</th>
          </tr>
        </thead>
        <tbody>
          {inscrits.map(i => (
            <tr key={i.id} style={{ borderBottom: "1px solid #eee", textAlign: "center" }}>
              <td style={{ padding: "12px", fontWeight: "bold" }}>{i.nom}</td>
              <td style={{ padding: "12px" }}>{i.cne}</td>
              <td style={{ padding: "12px" }}>{i.sujet}</td>
              <td style={{ padding: "12px", color: "green", fontWeight: "bold" }}><FaCheck /> {i.etat}</td>
              <td style={{ padding: "12px" }}>{i.bourse}</td>
              <td style={{ padding: "12px" }}>
                <button style={{ background: "#8B1E3F", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}>
                   <FaFilePdf /> Reçu
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}