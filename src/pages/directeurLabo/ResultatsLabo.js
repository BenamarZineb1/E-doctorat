import React from "react";

export default function ResultatsLabo() {
  const resultats = [
    { id: 1, candidat: "Guennoun Abdellah", sujet: "Blockchain Medical", noteDossier: 15.5, noteEntretien: 16.0, moy: 15.75, decision: "Admis" },
    { id: 2, candidat: "Zineb Benamar", sujet: "Blockchain Medical", noteDossier: 16.0, noteEntretien: 13.0, moy: 14.5, decision: "Liste d'attente (Rang 1)" },
    { id: 3, candidat: "Karim Tazi", sujet: "Optimisation AI", noteDossier: 13.0, noteEntretien: 10.0, moy: 11.5, decision: "Refusé" },
  ];

  return (
    <div>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Délibérations et Résultats Finaux</h2>

      <div style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#003366", color: "#fff" }}>
            <tr>
              <th style={styles.th}>Candidat</th>
              <th style={styles.th}>Sujet</th>
              <th style={styles.th}>Note Dossier</th>
              <th style={styles.th}>Note Entretien</th>
              <th style={styles.th}>Moyenne</th>
              <th style={styles.th}>Décision</th>
            </tr>
          </thead>
          <tbody>
            {resultats.map((res, i) => (
              <tr key={res.id} style={{ borderBottom: "1px solid #eee", background: i % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                <td style={styles.td}><strong>{res.candidat}</strong></td>
                <td style={styles.td}>{res.sujet}</td>
                <td style={styles.td}>{res.noteDossier}</td>
                <td style={styles.td}>{res.noteEntretien}</td>
                <td style={{...styles.td, fontWeight: "bold", color: "#003366"}}>{res.moy}</td>
                <td style={styles.td}>
                  <span style={{
                    padding: "5px 10px", borderRadius: "15px", fontSize: "12px", color: "#fff", fontWeight: "bold",
                    backgroundColor: res.decision === "Admis" ? "#28a745" : (res.decision === "Refusé" ? "#dc3545" : "#ffc107")
                  }}>
                    {res.decision}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  th: { padding: "15px", textAlign: "left", fontSize: "14px" },
  td: { padding: "12px 15px", fontSize: "14px", color: "#333" }
};