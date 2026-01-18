import React from "react";
import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function DocumentsScolarite() {
  const docs = [
    { id: 1, nom: "Liste des Inscrits 2025/2026", date: "15/01/2026" },
    { id: 2, nom: "PV Global Commissions", date: "10/01/2026" },
  ];

  return (
    <div>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Documents Administratifs</h2>
      <div style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
                {docs.map(d => (
                    <tr key={d.id} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                            <FaFilePdf color="#dc3545" size={20} />
                            <div>
                                <div style={{ fontWeight: "bold" }}>{d.nom}</div>
                                <div style={{ fontSize: "12px", color: "#888" }}>Généré le {d.date}</div>
                            </div>
                        </td>
                        <td style={{ padding: "15px", textAlign: "right" }}>
                            <button style={{ background: "#003366", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer" }}>
                                <FaDownload />
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