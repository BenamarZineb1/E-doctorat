import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function SujetsPole() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLabo, setFilterLabo] = useState("");

  const SUJETS_MOCK = [
    { id: 1, titre: "Blockchain-based Medical Records", prof: "Amine OMOR", coDir: "Nour Eddine EL KANT", labo: "LIA", formation: "IA & Data", status: "Validé" },
    { id: 2, titre: "Optimisation des réseaux de neurones", prof: "Nour Eddine EL KANT", coDir: "-", labo: "LIA", formation: "IA & Data", status: "Validé" },
    { id: 3, titre: "Analyse prédictive Big Data", prof: "Karim SANI", coDir: "Amine OMOR", labo: "LSD", formation: "Big Data", status: "Validé" },
  ];

  // Filtrage
  const filteredSujets = SUJETS_MOCK.filter(s =>
    s.titre.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterLabo === "" || s.labo === filterLabo)
  );

  return (
    <div>
      <h2 style={{ color: "#003366" }}>Sujets de Thèse (Global)</h2>

      {/* Filtres */}
      <div style={{ background: "#fff", padding: "15px", borderRadius: "8px", display: "flex", gap: "15px", marginBottom: "20px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <div style={{ position: "relative", flex: 1 }}>
          <FaSearch style={{ position: "absolute", left: "10px", top: "10px", color: "#999" }} />
          <input
            type="text"
            placeholder="Rechercher par titre, mot-clé..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%", padding: "8px 10px 8px 35px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaFilter color="#666" />
          <select onChange={(e) => setFilterLabo(e.target.value)} style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}>
            <option value="">Tous les Laboratoires</option>
            <option value="LIA">Labo IA (LIA)</option>
            <option value="LSD">Labo Systèmes Distribués (LSD)</option>
          </select>
          <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}>
            <option value="">Toutes les Formations</option>
            <option value="IA">Formation IA</option>
            <option value="BD">Formation Big Data</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <thead style={{ background: "#003366", color: "#fff" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "left" }}>Titre du Sujet</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Directeur</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Co-Directeur</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Laboratoire</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Formation Doc.</th>
          </tr>
        </thead>
        <tbody>
          {filteredSujets.map(s => (
            <tr key={s.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "12px", fontWeight: "500" }}>{s.titre}</td>
              <td style={{ padding: "12px" }}>{s.prof}</td>
              <td style={{ padding: "12px", color: "#666" }}>{s.coDir}</td>
              <td style={{ padding: "12px" }}><span style={{ background: "#e9ecef", padding: "2px 8px", borderRadius: "4px", fontSize: "12px" }}>{s.labo}</span></td>
              <td style={{ padding: "12px" }}>{s.formation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}