import React from "react";

export default function CandidatsCED() {
  const candidats = [
    { id: 1, cne: "111112222", nom: "Guennoun Abdellah", sujet: "Blockchain-based Medical Records", dir: "OMOR Amine", coDir: "EL KANT Nour Eddine", formation: "FD IA", labo: "LIA" },
    { id: 2, cne: "111112222", nom: "Guennoun Abdellah", sujet: "Optimisation des réseaux de neurones", dir: "EL KANT Nour Eddine", coDir: "-", formation: "FD IA", labo: "LIA" },
  ];

  return (
    <div>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Liste des Candidats (CED)</h2>
      <div style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f8f9fa", borderBottom: "2px solid #ddd" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left" }}>CNE</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Candidat</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Sujet</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Directeur</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Co-Directeur</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Formation</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Laboratoire</th>
            </tr>
          </thead>
          <tbody>
            {candidats.map((c) => (
              <tr key={c.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px" }}>{c.cne}</td>
                <td style={{ padding: "12px", fontWeight: "bold" }}>{c.nom}</td>
                <td style={{ padding: "12px", fontSize: "13px" }}>{c.sujet}</td>
                <td style={{ padding: "12px" }}>{c.dir}</td>
                <td style={{ padding: "12px", color: "#666" }}>{c.coDir}</td>
                <td style={{ padding: "12px", fontSize: "12px" }}>{c.formation}</td>
                <td style={{ padding: "12px", fontSize: "12px" }}>{c.labo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}