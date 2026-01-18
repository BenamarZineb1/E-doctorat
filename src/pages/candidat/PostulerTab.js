import React from "react";
import LayoutCandidat, { commonStyles } from "./LayoutCandidat";

export default function PostulerTab() {
  return (
    <LayoutCandidat>
      <div style={commonStyles.card}>
        <h2 style={commonStyles.title}>Postuler aux sujets de thèse</h2>

        {/* Info Box */}
        <div style={{ background: "#e3f2fd", color: "#0d47a1", padding: "15px", borderRadius: "5px", marginBottom: "20px", fontSize: "14px" }}>
          Recherchez l'axe de recherche ou le titre du sujet. Cochez la case et cliquez sur "POSTULER" en bas.
          <br/>Attention : Certains sujets demandent de charger votre projet de recherche correspondant dans l'onglet "Mes Choix".
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "25px", background: "#f8f9fa", padding: "15px", borderRadius: "6px" }}>
          <div style={{ flex: 2, minWidth: "200px" }}>
            <label style={commonStyles.label}>Mots clés</label>
            <input type="text" placeholder="Rechercher par titre, axe..." style={{ ...commonStyles.input, marginBottom: 0 }} />
          </div>
          <div style={{ flex: 1, minWidth: "150px" }}>
            <label style={commonStyles.label}>Laboratoire</label>
            <select style={{ ...commonStyles.input, marginBottom: 0 }}>
              <option>Tous les laboratoires</option>
              <option>L.I.A</option>
              <option>L.S.D</option>
            </select>
          </div>
          <div style={{ flex: 1, minWidth: "150px" }}>
             <label style={commonStyles.label}>Formation Doctorale</label>
             <select style={{ ...commonStyles.input, marginBottom: 0 }}>
               <option>Toutes</option>
               <option>IA & Sciences</option>
             </select>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
            <thead>
              <tr style={{ background: "#003366", color: "#fff" }}>
                <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Laboratoire</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Professeur</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Sujet</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Formation Doc.</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px", textAlign: "center" }}><input type="checkbox" style={{ transform: "scale(1.5)" }} /></td>
                <td style={{ padding: "12px" }}>LIA</td>
                <td style={{ padding: "12px", fontWeight: "bold" }}>Amine OMOR</td>
                <td style={{ padding: "12px" }}>Blockchain-based Medical Records</td>
                <td style={{ padding: "12px" }}>IA et Sciences des Données</td>
              </tr>
              {/* Row 2 */}
              <tr style={{ borderBottom: "1px solid #ddd", background: "#f9f9f9" }}>
                <td style={{ padding: "12px", textAlign: "center" }}><input type="checkbox" style={{ transform: "scale(1.5)" }} /></td>
                <td style={{ padding: "12px" }}>LSD</td>
                <td style={{ padding: "12px", fontWeight: "bold" }}>Nour Eddine EL KANT</td>
                <td style={{ padding: "12px" }}>Optimisation des réseaux de neurones</td>
                <td style={{ padding: "12px" }}>Systèmes Informatiques</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
          <button style={{ ...commonStyles.btnSuccess, background: "#8B1E3F" }}>POSTULER</button>
        </div>
      </div>
    </LayoutCandidat>
  );
}