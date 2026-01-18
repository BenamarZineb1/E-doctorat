import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function RechercheScolarite() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Recherche Globale</h2>

      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", display: "flex", gap: "10px" }}>
        <input
            type="text"
            placeholder="Rechercher un candidat, un sujet, un prof..."
            style={{ flex: 1, padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button style={{ background: "#003366", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
            <FaSearch /> Rechercher
        </button>
      </div>

      <div style={{ marginTop: "20px", color: "#666", textAlign: "center", fontStyle: "italic" }}>
         {query ? `Résultats pour : "${query}" (Simulation)` : "Entrez un mot clé pour commencer."}
      </div>
    </div>
  );
}