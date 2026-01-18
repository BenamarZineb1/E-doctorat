import React, { useState } from "react";
import { styles } from "./LayoutProf"; // On importe seulement les styles

export default function Commissions() {
  const [pvSent, setPvSent] = useState(false);

  const inpStyle = { padding: "5px", border: "1px solid #ddd", borderRadius: "4px" };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mes Commissions</h2>

      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", marginBottom: "20px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
        <h3 style={{ color: "#8B1E3F", marginBottom: "10px", fontSize: "18px" }}>Sujet : Optimisation des réseaux de neurones</h3>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>
            <strong>Date:</strong> 20/10/2025 | <strong>Lieu:</strong> Salle B2
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Candidat</th>
              <th style={styles.th}>Note Dossier</th>
              <th style={styles.th}>Note Entretien</th>
              <th style={styles.th}>Décision</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Abdellah Guennoun</td>
              <td style={styles.td}><input type="number" style={inpStyle} defaultValue={14} /></td>
              <td style={styles.td}><input type="number" style={inpStyle} defaultValue={16} /></td>
              <td style={styles.td}>
                <select style={inpStyle}>
                  <option>Accepter</option>
                  <option>Refuser</option>
                  <option>Attente</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "15px", textAlign: "right" }}>
            {!pvSent ? (
                <button style={styles.btnPrimary} onClick={() => setPvSent(true)}>Générer et Envoyer PV</button>
            ) : (
                <span style={styles.badge("success")}>PV Envoyé avec succès</span>
            )}
        </div>
      </div>
    </div>
  );
}