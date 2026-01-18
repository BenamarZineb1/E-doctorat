import React from "react";

export default function SujetsCED() {
  const sujets = [
    { id: 1, titre: "Blockchain-based Medical Records", desc: "Research topic focused on securing medical records using blockchain technology.", coDir: "EL KANT Nour Eddine", formation: "Formation Doctorale en Intelligence Artificielle" },
    { id: 2, titre: "Optimisation des réseaux de neurones", desc: "Étude sur l'efficacité énergétique de l'IA", coDir: "-", formation: "Formation Doctorale en Intelligence Artificielle" },
    { id: 3, titre: "Analyse prédictive Big Data", desc: "Application aux données de santé", coDir: "OMOR Amine", formation: "Formation Doctorale en Sciences des Données" },
    { id: 4, titre: "Sécurité des systèmes IoT", desc: "Protocoles de sécurité pour objets connectés", coDir: "-", formation: "Formation Doctorale en Systèmes Informatiques" },
  ];

  return (
    <div>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Liste des Sujets (CED)</h2>
      <div style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f8f9fa", borderBottom: "2px solid #ddd" }}>
            <tr>
              <th style={{ padding: "15px", textAlign: "left", color: "#444" }}>Titre Sujet</th>
              <th style={{ padding: "15px", textAlign: "left", color: "#444" }}>Description</th>
              <th style={{ padding: "15px", textAlign: "left", color: "#444" }}>Co-Directeur</th>
              <th style={{ padding: "15px", textAlign: "left", color: "#444" }}>Formation Doctorale</th>
            </tr>
          </thead>
          <tbody>
            {sujets.map((s) => (
              <tr key={s.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "15px", fontWeight: "600", color: "#003366" }}>{s.titre}</td>
                <td style={{ padding: "15px", color: "#666", fontSize: "13px" }}>{s.desc}</td>
                <td style={{ padding: "15px" }}>{s.coDir}</td>
                <td style={{ padding: "15px", color: "#8B1E3F", fontSize: "13px", fontWeight: "500" }}>{s.formation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}