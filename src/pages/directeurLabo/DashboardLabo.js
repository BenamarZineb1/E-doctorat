import React, { useState } from "react";
import { FaEdit, FaUserTag } from "react-icons/fa";

export default function DashboardLabo() {
  // Mock Data : Sujets soumis par les profs (ou PH)
  const [sujets, setSujets] = useState([
    { id: 1, titre: "Blockchain-based Medical Records", prof: "Amine OMOR", status: "Validé" },
    { id: 2, titre: "Optimisation des réseaux de neurones", prof: "Nour Eddine EL KANT", status: "En attente" },
    { id: 3, titre: "Sécurité IoT et Cloud Computing", prof: "Sans affectation", status: "Brouillon" },
  ]);

  const profsLabo = ["Amine OMOR", "Nour Eddine EL KANT", "Karim SANI"];

  // Fonction pour affecter un sujet à un prof (spécifique directeur labo)
  const handleAffecter = (idSujet, nouveauProf) => {
    setSujets(sujets.map(s => s.id === idSujet ? { ...s, prof: nouveauProf, status: "Validé" } : s));
  };

  return (
    <div>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Gestion des Sujets & Affectations</h2>

      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8f9fa", textAlign: "left", color: "#555" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Titre du Sujet</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Professeur Responsable</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Statut</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sujets.map((sujet) => (
              <tr key={sujet.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px", fontWeight: "500" }}>{sujet.titre}</td>
                <td style={{ padding: "12px" }}>
                  {/* Select pour affecter un prof */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaUserTag style={{ color: "#666", marginRight: "8px" }} />
                    <select
                      value={sujet.prof}
                      onChange={(e) => handleAffecter(sujet.id, e.target.value)}
                      style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
                    >
                      <option value="Sans affectation">-- Choisir Prof --</option>
                      {profsLabo.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </td>
                <td style={{ padding: "12px" }}>
                  <span style={{
                    padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold",
                    backgroundColor: sujet.status === "Validé" ? "#d4edda" : "#fff3cd",
                    color: sujet.status === "Validé" ? "#155724" : "#856404"
                  }}>
                    {sujet.status}
                  </span>
                </td>
                <td style={{ padding: "12px" }}>
                  <button style={{ background: "none", border: "none", color: "#003366", cursor: "pointer" }}>
                    <FaEdit /> Modifier
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