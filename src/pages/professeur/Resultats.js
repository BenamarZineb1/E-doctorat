import React from "react";
import { styles } from "./LayoutProf";

export default function Resultats() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mes Résultats</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Sujet</th>
            <th style={styles.th}>Candidat</th>
            <th style={styles.th}>Note Dossier</th>
            <th style={styles.th}>Note Entretien</th>
            <th style={styles.th}>Moyenne</th>
            <th style={styles.th}>Décision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Optimisation IA</td>
            <td style={styles.td}>Guennoun Abdellah</td>
            <td style={styles.td}>14</td>
            <td style={styles.td}>16</td>
            <td style={styles.td}><strong>15</strong></td>
            <td style={styles.td}><span style={styles.badge("success")}>Liste Principale</span></td>
          </tr>
          <tr>
            <td style={styles.td}>Sécurité IoT</td>
            <td style={styles.td}>Martin Durand</td>
            <td style={styles.td}>12</td>
            <td style={styles.td}>13</td>
            <td style={styles.td}><strong>12.5</strong></td>
            <td style={styles.td}><span style={styles.badge("warn")}>Liste d'attente</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}