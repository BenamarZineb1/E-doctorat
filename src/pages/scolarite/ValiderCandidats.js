import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaClock, FaInfoCircle } from "react-icons/fa";

export default function ValiderCandidats() {
  const [candidats, setCandidats] = useState([
    {
      id: 1, cne: "N1300001", nom: "EL ALAMI", prenom: "Ahmed",
      sujet: "IA et Santé", fd: "Sciences et Techniques", ced: "Sciences", labo: "LISI",
      dateDepot: "12/01/2026", remarque: "Dossier Complet et validé par le secrétariat.", status: "En attente",
      cursus: "DUT + Licence + Master"
    },
    {
      id: 2, cne: "R1400002", nom: "BENANI", prenom: "Sara",
      sujet: "Big Data Analytics", fd: "Informatique", ced: "Sciences", labo: "LID",
      dateDepot: "14/01/2026", remarque: "Manque relevé S1 (Original).", status: "Invalide",
      cursus: "Cycle Ingénieur (Prépa)"
    },
    {
      id: 3, cne: "M1500003", nom: "CHRAIBI", prenom: "Karim",
      sujet: "Cryptographie", fd: "Math & Info", ced: "Sciences", labo: "LISI",
      dateDepot: "15/01/2026", remarque: "RAS", status: "Valide",
      cursus: "DUT + Cycle Ingénieur"
    },
    {
      id: 4, cne: "K1600004", nom: "OUAZZANI", prenom: "Hiba",
      sujet: "Smart Grids", fd: "Ingénierie", ced: "Sciences", labo: "LID",
      dateDepot: "16/01/2026", remarque: "Diplôme étranger (Équivalence OK)", status: "En attente",
      cursus: "Doctorat (Médecine) + Master"
    },
  ]);

  // Double clic pour changer le statut
  const handleDoubleClick = (id) => {
    setCandidats(prev => prev.map(c => {
      if (c.id === id) {
        let newStatus = c.status;
        if (c.status === "En attente") newStatus = "Valide";
        else if (c.status === "Valide") newStatus = "Invalide";
        else newStatus = "En attente";
        return { ...c, status: newStatus };
      }
      return c;
    }));
  };

  // Affichage des icônes de statut
  const renderStatusIcon = (status) => {
    switch(status) {
        case "Valide":
            return <FaCheckCircle size={22} color="#28a745" title="Validé" />;
        case "Invalide":
            return <FaTimesCircle size={22} color="#dc3545" title="Rejeté" />;
        default:
            return <FaClock size={22} color="#ffc107" title="En attente" />;
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#003366", margin: "0 0 10px 0" }}>Validation des Candidatures</h2>
        <p style={{ fontSize: "13px", color: "#666" }}>
            Double-cliquez sur une ligne pour changer le statut.
        </p>
      </div>

      <div style={styles.tableCard}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.trHead}>
              <th style={styles.th}>CNE</th>
              <th style={styles.th}>Nom & Prénom</th>
              <th style={styles.th}>Sujet</th>
              <th style={styles.th}>Cursus</th>
              <th style={styles.th}>Labo</th>
              <th style={styles.th}>Date</th>
              <th style={styles.thCenter}>Info</th>   {/* Colonne Remarque réduite */}
              <th style={styles.thCenter}>Statut</th> {/* Colonne Validation réduite */}
            </tr>
          </thead>
          <tbody>
            {candidats.map((c) => (
              <tr
                key={c.id}
                onDoubleClick={() => handleDoubleClick(c.id)}
                style={{
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    background: c.status === "Valide" ? "#f9fffb" : "#fff"
                }}
              >
                <td style={{...styles.td, fontFamily:"monospace", fontWeight:"bold", color:"#555"}}>{c.cne}</td>
                <td style={{...styles.td, fontWeight:"bold"}}>{c.nom} {c.prenom}</td>
                <td style={{...styles.td, color:"#003366"}}>{c.sujet}</td>
                <td style={{...styles.td, fontSize:"12px", color:"#8B1E3F"}}>{c.cursus}</td>
                <td style={{...styles.td, fontSize:"12px"}}>{c.labo}</td>
                <td style={{...styles.td, fontSize:"12px"}}>{c.dateDepot}</td>

                {/* Colonne Remarque : Juste l'icône */}
                <td style={styles.tdCenter}>
                    <button
                        onClick={() => alert(`Remarque pour ${c.nom}:\n\n${c.remarque}`)}
                        title={c.remarque} // Affiche le texte au survol
                        style={styles.btnIcon}
                    >
                        <FaInfoCircle size={18} color="#17a2b8"/>
                    </button>
                </td>

                {/* Colonne Statut : Juste l'icône */}
                <td style={styles.tdCenter}>
                    {renderStatusIcon(c.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.legend}>
         <span style={{display:"flex", alignItems:"center", gap:"5px"}}><FaCheckCircle color="#28a745"/> Validé</span>
         <span style={{display:"flex", alignItems:"center", gap:"5px"}}><FaTimesCircle color="#dc3545"/> Rejeté</span>
         <span style={{display:"flex", alignItems:"center", gap:"5px"}}><FaClock color="#ffc107"/> En attente</span>
      </div>
    </div>
  );
}

const styles = {
  tableCard: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    overflowX: "auto"
  },
  table: { width: "100%", borderCollapse: "collapse" },
  trHead: { background: "#003366", color: "#fff" },
  th: { padding: "12px", textAlign: "left", fontSize: "13px", fontWeight: "600" },
  thCenter: { padding: "12px", textAlign: "center", fontSize: "13px", fontWeight: "600", width: "60px" },
  td: { padding: "12px", fontSize: "13px", color: "#333", verticalAlign: "middle" },
  tdCenter: { padding: "12px", textAlign: "center", verticalAlign: "middle" },
  btnIcon: { background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "center", width: "100%" },
  legend: { marginTop: "15px", display: "flex", gap: "20px", fontSize: "12px", color: "#666", justifyContent: "flex-end" }
};