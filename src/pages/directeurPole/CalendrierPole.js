import React, { useState } from "react";
import { FaSave, FaCalendarCheck } from "react-icons/fa";

export default function CalendrierPole() {
  // État initial (dates vides ou pré-remplies)
  const [phases, setPhases] = useState([
    { id: 1, label: "Dépôt des sujets (Profs)", start: "", end: "", target: "Professeur" },
    { id: 2, label: "Dépôt des candidatures (Étudiants)", start: "2026-10-01", end: "2026-10-30", target: "Candidat" },
    { id: 3, label: "Présélection des dossiers", start: "2026-11-01", end: "2026-11-10", target: "Interne" },
    { id: 4, label: "Entretiens Oraux", start: "2026-11-15", end: "2026-11-20", target: "Tous" },
    { id: 5, label: "Affichage des résultats définitifs", start: "2026-11-25", end: "2026-11-25", target: "Tous" },
  ]);

  const handleChange = (id, field, value) => {
    setPhases(phases.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleSave = (id) => {
    alert(`Dates mises à jour pour la phase : ${phases.find(p => p.id === id).label}`);
  };

  return (
    <div>
      <h2 style={{ color: "#003366" }}>Calendrier Universitaire Doctoral</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>Définissez les dates clés de l'année. Ces dates conditionnent l'accès aux fonctionnalités pour les profs et candidats.</p>

      <div style={{ display: "grid", gap: "15px" }}>
        {phases.map((phase) => (
          <div key={phase.id} style={styles.card}>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: "0 0 5px 0", color: "#003366" }}>{phase.label}</h4>
              <small style={{ color: "#888" }}>Visible pour: {phase.target}</small>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div>
                <label style={styles.label}>Du :</label>
                <input type="date" value={phase.start} onChange={(e) => handleChange(phase.id, "start", e.target.value)} style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>Au :</label>
                <input type="date" value={phase.end} onChange={(e) => handleChange(phase.id, "end", e.target.value)} style={styles.input} />
              </div>
              <button onClick={() => handleSave(phase.id)} style={styles.btnConfirm}>
                <FaSave /> Confirmer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", borderLeft: "4px solid #8B1E3F" },
  label: { fontSize: "12px", color: "#666", display: "block", marginBottom: "2px" },
  input: { padding: "8px", borderRadius: "4px", border: "1px solid #ccc", color: "#333" },
  btnConfirm: { padding: "8px 15px", background: "#28a745", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", height: "36px", marginTop: "14px" }
};