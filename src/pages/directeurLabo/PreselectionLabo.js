import React, { useState } from "react";
import { FaArrowRight, FaTrash, FaPaperPlane, FaExclamationTriangle } from "react-icons/fa";

// Données Mock pour simuler la sélection
const MOCK_COMMISSIONS = [
  { id: 101, date: "2026-06-15", sujets: [{ id: 1, titre: "Blockchain Medical" }, { id: 2, titre: "AI Optimization" }] }
];

const MOCK_CANDIDATS = [
  { id: 1, nom: "Guennoun Abdellah", sujetId: 1, parcours: "DUT + Licence + Master", moyenne: 15.5 },
  { id: 2, nom: "Zineb Benamar", sujetId: 1, parcours: "Cycle Ingénieur", moyenne: 16.0 },
  { id: 3, nom: "Karim Tazi", sujetId: 1, parcours: "Licence + Master", moyenne: 13.0 },
  { id: 4, nom: "Sara Idrissi", sujetId: 2, parcours: "Doctorat (Réorientation)", moyenne: 14.0 },
];

export default function PreselectionLabo() {
  const [selectedCommission, setSelectedCom] = useState(null);
  const [selectedSujet, setSelectedSujet] = useState(null);

  // Listes de manipulation
  const [candidatsPool, setCandidatsPool] = useState([]);
  const [convoques, setConvoques] = useState([]);

  // 1. Sélectionner Commission
  const handleSelectCom = (id) => {
    const com = MOCK_COMMISSIONS.find(c => c.id === parseInt(id));
    setSelectedCom(com);
    setSelectedSujet(null);
    setCandidatsPool([]);
    setConvoques([]);
  };

  // 2. Sélectionner Sujet -> Charger Candidats
  const handleSelectSujet = (id) => {
    const sId = parseInt(id);
    setSelectedSujet(sId);
    // Filtrer les candidats qui ont postulé à ce sujet
    const cands = MOCK_CANDIDATS.filter(c => c.sujetId === sId);
    setCandidatsPool(cands);
    setConvoques([]);
  };

  // 3. Déplacer vers Convoqués
  const addToConvoques = (candidat) => {
    setConvoques([...convoques, candidat]);
    setCandidatsPool(candidatsPool.filter(c => c.id !== candidat.id));
  };

  // 4. Retirer des Convoqués
  const removeFromConvoques = (candidat) => {
    setCandidatsPool([...candidatsPool, candidat]);
    setConvoques(convoques.filter(c => c.id !== candidat.id));
  };

  // 5. Notification Irréversible
  const handleNotifier = () => {
    if (window.confirm("ATTENTION: Cette action est irréversible.\n\nLes candidats convoqués recevront une notification et les autres seront marqués comme refusés pour l'entretien. Confirmer ?")) {
      alert("Notifications envoyées avec succès.");
      // Appel API ici
      setConvoques([]);
      setCandidatsPool([]);
    }
  };

  return (
    <div>
      <h2 style={{ color: "#003366" }}>Présélection et Convocation</h2>

      {/* Barre de sélection */}
      <div style={styles.filterBar}>
        <select onChange={e => handleSelectCom(e.target.value)} style={styles.select}>
          <option value="">-- Choisir une Commission --</option>
          {MOCK_COMMISSIONS.map(c => <option key={c.id} value={c.id}>Commission du {c.date}</option>)}
        </select>

        {selectedCommission && (
          <select onChange={e => handleSelectSujet(e.target.value)} style={styles.select}>
            <option value="">-- Choisir un Sujet --</option>
            {selectedCommission.sujets.map(s => <option key={s.id} value={s.id}>{s.titre}</option>)}
          </select>
        )}
      </div>

      {selectedSujet && (
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

          {/* Table Gauche: TOUS LES CANDIDATS */}
          <div style={styles.box}>
            <h4 style={styles.boxTitle}>Candidats Postulants ({candidatsPool.length})</h4>
            {candidatsPool.map(c => (
              <div key={c.id} style={styles.itemCard}>
                <div>
                  <strong>{c.nom}</strong>
                  <div style={{ fontSize: "11px", color: "#666", marginTop: "2px" }}>{c.parcours}</div>
                  <div style={{ fontSize: "11px", color: "#003366" }}>Moy: {c.moyenne}/20</div>
                </div>
                <button onClick={() => addToConvoques(c)} style={styles.btnAction}>
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>

          {/* Table Droite: CONVOQUÉS */}
          <div style={{ ...styles.box, border: "2px solid #28a745" }}>
            <h4 style={{ ...styles.boxTitle, color: "#28a745", borderBottomColor: "#28a745" }}>
              Liste des Convoqués ({convoques.length})
            </h4>
            {convoques.length === 0 && <p style={{ fontSize: "12px", fontStyle: "italic" }}>Sélectionnez des candidats...</p>}

            {convoques.map(c => (
              <div key={c.id} style={styles.itemCard}>
                <strong>{c.nom}</strong>
                <button onClick={() => removeFromConvoques(c)} style={styles.btnRemove}>
                  <FaTrash />
                </button>
              </div>
            ))}

            {convoques.length > 0 && (
              <div style={{ marginTop: "20px", paddingTop: "10px", borderTop: "1px solid #eee", textAlign: "center" }}>
                <div style={{ color: "red", fontSize: "11px", marginBottom: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaExclamationTriangle style={{ marginRight: "5px" }} /> Irréversible
                </div>
                <button onClick={handleNotifier} style={styles.btnNotify}>
                  <FaPaperPlane style={{ marginRight: "5px" }} /> Envoyer Notification
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  filterBar: { background: "#fff", padding: "15px", borderRadius: "8px", display: "flex", gap: "15px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
  select: { padding: "8px", borderRadius: "4px", border: "1px solid #ccc", minWidth: "200px" },
  box: { flex: 1, background: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)", border: "1px solid #ddd" },
  boxTitle: { margin: "0 0 15px 0", borderBottom: "2px solid #003366", paddingBottom: "8px", color: "#003366" },
  itemCard: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8f9fa", padding: "10px", borderRadius: "5px", marginBottom: "8px", border: "1px solid #eee" },
  btnAction: { background: "#003366", color: "#fff", border: "none", width: "30px", height: "30px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
  btnRemove: { background: "#dc3545", color: "#fff", border: "none", width: "30px", height: "30px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
  btnNotify: { background: "#8B1E3F", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", width: "100%", fontWeight: "bold" }
};