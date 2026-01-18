import React from "react";

export default function CommissionsCED() {
  const commissions = [
    { id: 1, date: "2026-02-15", heure: "09:00", lieu: "Salle de Conférence B", labo: "LIA", sujets: 3, membres: ["Pr. Omor", "Pr. El Kant", "Pr. Sani"] },
    { id: 2, date: "2026-02-16", heure: "14:00", lieu: "Salle A2", labo: "LSD", sujets: 2, membres: ["Pr. Bennani", "Pr. Tazi"] },
  ];

  return (
    <div>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Commissions Programmées</h2>
      <div style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f8f9fa", borderBottom: "2px solid #ddd" }}>
            <tr>
              <th style={{ padding: "15px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Heure</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Lieu</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Laboratoire</th>
              <th style={{ padding: "15px", textAlign: "center" }}>Sujets à traiter</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Membres du Jury</th>
            </tr>
          </thead>
          <tbody>
            {commissions.map((c) => (
              <tr key={c.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "15px", fontWeight: "bold" }}>{c.date}</td>
                <td style={{ padding: "15px" }}>{c.heure}</td>
                <td style={{ padding: "15px" }}>{c.lieu}</td>
                <td style={{ padding: "15px", color: "#8B1E3F" }}>{c.labo}</td>
                <td style={{ padding: "15px", textAlign: "center" }}>
                    <span style={{background: "#e2e6ea", padding: "4px 8px", borderRadius: "10px", fontSize: "12px"}}>{c.sujets}</span>
                </td>
                <td style={{ padding: "15px", fontSize: "13px" }}>{c.membres.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}