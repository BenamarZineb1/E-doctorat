import React from "react";
import { FaPrint, FaFileAlt, FaMoneyBillWave, FaIdCard } from "react-icons/fa";

export default function InscriptionsScolarite() {
  const inscrits = [
    { id: 1, cne: "N1300001", nom: "EL ALAMI Ahmed", sujet: "IA et Santé" }
  ];

  return (
    <div>
       <h2 style={{ color: "#003366", marginBottom: "20px" }}>Dossiers Inscrits & Documents</h2>
       <div style={styles.card}>
         <table style={styles.table}>
            <thead style={styles.thead}>
                <tr>
                    <th style={styles.th}>Candidat</th>
                    <th style={styles.th}>Sujet</th>
                    <th style={styles.thCenter}>Reçu Dépôt</th>
                    <th style={styles.thCenter}>Info Doctorant</th>
                    <th style={styles.thCenter}>Demande Bourse</th>
                    <th style={styles.thCenter}>Fiche Dépôt</th>
                </tr>
            </thead>
            <tbody>
                {inscrits.map(i => (
                    <tr key={i.id} style={{borderBottom: "1px solid #eee"}}>
                        <td style={styles.td}><strong>{i.nom}</strong><br/><small>{i.cne}</small></td>
                        <td style={styles.td}>{i.sujet}</td>
                        <td style={styles.tdCenter}>
                            <button style={styles.btnAction}><FaPrint /> Générer</button>
                        </td>
                        <td style={styles.tdCenter}>
                            <button style={styles.btnInfo}><FaIdCard /> Voir</button>
                        </td>
                        <td style={styles.tdCenter}>
                            <button style={styles.btnBourse}><FaMoneyBillWave /> Demander</button>
                        </td>
                        <td style={styles.tdCenter}>
                            <button style={styles.btnFile}><FaFileAlt /> PDF</button>
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
    card: { background: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
    table: { width: "100%", borderCollapse: "collapse" },
    thead: { background: "#f8f9fa", borderBottom: "2px solid #ddd" },
    th: { padding: "15px", textAlign: "left", fontSize: "14px", color: "#555" },
    thCenter: { padding: "15px", textAlign: "center", fontSize: "14px", color: "#555" },
    td: { padding: "15px", fontSize: "14px" },
    tdCenter: { padding: "15px", textAlign: "center" },
    btnAction: { background: "#003366", color: "#fff", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer", fontSize:"12px", display:"inline-flex", gap:"5px", alignItems:"center" },
    btnInfo: { background: "#17a2b8", color: "#fff", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer", fontSize:"12px", display:"inline-flex", gap:"5px", alignItems:"center" },
    btnBourse: { background: "#ffc107", color: "#000", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer", fontSize:"12px", display:"inline-flex", gap:"5px", alignItems:"center" },
    btnFile: { background: "#6c757d", color: "#fff", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer", fontSize:"12px", display:"inline-flex", gap:"5px", alignItems:"center" },
};