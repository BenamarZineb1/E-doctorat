import React from "react";
import { styles } from "./LayoutProf";
import { FaFilePdf } from "react-icons/fa";

export default function MesCandidats() {
  const candidats = [
    { id: 1, cne: "111112222", nom: "Abdellah Guennoun", sujet: "Optimisation des réseaux de neurones" },
    { id: 2, cne: "CD789012", nom: "Martin Durand", sujet: "Sécurité des systèmes IoT" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mes Candidats</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>CNE</th>
            <th style={styles.th}>Candidat</th>
            <th style={styles.th}>Sujet</th>
            <th style={styles.th}>Projet de thèse</th>
          </tr>
        </thead>
        <tbody>
          {candidats.map((c) => (
            <tr key={c.id}>
              <td style={styles.td}>{c.cne}</td>
              <td style={styles.td}>{c.nom}</td>
              <td style={styles.td}>{c.sujet}</td>
              <td style={styles.td}>
                <button style={{ ...styles.btnPrimary, fontSize: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                   <FaFilePdf /> Voir Projet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}