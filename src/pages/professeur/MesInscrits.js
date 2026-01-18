import React from "react";
import { styles } from "./LayoutProf";

export default function MesInscrits() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mes Inscrits</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>CNE</th>
            <th style={styles.th}>Nom</th>
            <th style={styles.th}>Prénom</th>
            <th style={styles.th}>Titre Thèse</th>
            <th style={styles.th}>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>111112222</td>
            <td style={styles.td}>Guennoun</td>
            <td style={styles.td}>Abdellah</td>
            <td style={styles.td}>Optimisation des réseaux de neurones</td>
            <td style={styles.td}><span style={styles.badge("success")}>Inscrit</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}