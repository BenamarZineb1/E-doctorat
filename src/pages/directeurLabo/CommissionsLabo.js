import React, { useState } from "react";
import { FaPlus, FaTrash, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

// Données simulées
const SUJETS_DISPO = [
  { id: 1, titre: "Blockchain Medical", prof: "Amine OMOR" },
  { id: 2, titre: "Optimisation AI", prof: "Nour Eddine EL KANT" },
  { id: 3, titre: "Big Data Analysis", prof: "Amine OMOR" }, // Même prof que sujet 1
];

const PROFS_LABO = ["Amine OMOR", "Nour Eddine EL KANT", "Karim SANI", "Prof. X", "Prof. Y", "Prof. Z"];

export default function CommissionsLabo() {
  const [commissions, setCommissions] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  // État du formulaire
  const [newCom, setNewCom] = useState({ date: "", lieu: "", heure: "09:00", sujets: [], membres: [] });

  // --- LOGIQUE METIER ---
  const handleAddSujet = (sujet) => {
    // 1. Ajouter le sujet à la liste "Programmée"
    const updatedSujets = [...newCom.sujets, sujet];

    // 2. Ajouter AUTOMATIQUEMENT le prof du sujet aux membres
    let updatedMembres = [...newCom.membres];

    // On vérifie si le prof n'est pas déjà dans la liste
    if (!updatedMembres.includes(sujet.prof)) {
      if (updatedMembres.length < 5) {
        updatedMembres.push(sujet.prof);
      } else {
        alert(`Attention: Le prof ${sujet.prof} ne peut pas être ajouté (Max 5 membres atteints).`);
      }
    }

    setNewCom({ ...newCom, sujets: updatedSujets, membres: updatedMembres });
  };

  const handleAddMembreManuel = (prof) => {
    if (newCom.membres.length >= 5) return alert("Maximum 5 membres par commission.");
    if (!newCom.membres.includes(prof)) {
      setNewCom({ ...newCom, membres: [...newCom.membres, prof] });
    }
  };

  const handleSave = () => {
    if (!newCom.date || !newCom.lieu) return alert("Date et Lieu obligatoires.");
    setCommissions([...commissions, { ...newCom, id: Date.now() }]);
    setIsCreating(false);
    setNewCom({ date: "", lieu: "", heure: "09:00", sujets: [], membres: [] });
  };

  // Sujets non encore sélectionnés dans cette commission
  const sujetsAffichables = SUJETS_DISPO.filter(s => !newCom.sujets.find(ns => ns.id === s.id));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h2 style={{ color: "#003366", margin: 0 }}>Gestion des Commissions</h2>
        {!isCreating && (
          <button onClick={() => setIsCreating(true)} style={styles.btnPrimary}>
            <FaPlus /> Nouvelle Commission
          </button>
        )}
      </div>

      {isCreating ? (
        <div style={styles.card}>
          <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "10px" }}>Planifier une commission</h3>

          {/* Formulaire Date/Lieu */}
          <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
            <input type="date" value={newCom.date} onChange={e => setNewCom({...newCom, date: e.target.value})} style={styles.input} />
            <input type="time" value={newCom.heure} onChange={e => setNewCom({...newCom, heure: e.target.value})} style={styles.input} />
            <input type="text" placeholder="Lieu (ex: Salle B)" value={newCom.lieu} onChange={e => setNewCom({...newCom, lieu: e.target.value})} style={styles.input} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

            {/* Colonne GAUCHE: Sujets */}
            <div style={styles.columnBox}>
              <h4 style={{ margin: "0 0 10px 0", color: "#003366" }}>1. Sélectionner Sujets</h4>
              <div style={styles.listBox}>
                {sujetsAffichables.map(s => (
                  <div key={s.id} onClick={() => handleAddSujet(s)} style={styles.listItemClickable}>
                    <span>{s.titre}</span>
                    <FaArrowRight color="#666" />
                  </div>
                ))}
                {sujetsAffichables.length === 0 && <small>Aucun sujet disponible.</small>}
              </div>

              <h4 style={{ margin: "15px 0 5px 0", color: "#28a745" }}>Sujets Programmés ({newCom.sujets.length})</h4>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {newCom.sujets.map(s => <li key={s.id}>{s.titre} <small>({s.prof})</small></li>)}
              </ul>
            </div>

            {/* Colonne DROITE: Membres */}
            <div style={styles.columnBox}>
              <h4 style={{ margin: "0 0 10px 0", color: "#003366" }}>2. Membres du Jury ({newCom.membres.length}/5)</h4>
              <select onChange={e => handleAddMembreManuel(e.target.value)} style={styles.input}>
                <option value="">+ Ajouter un membre manuel</option>
                {PROFS_LABO.map(p => <option key={p} value={p}>{p}</option>)}
              </select>

              <div style={{ marginTop: "10px" }}>
                {newCom.membres.map((m, i) => (
                  <div key={i} style={styles.tag}>
                    {m} <FaTrash size={10} style={{ cursor: "pointer", marginLeft: "5px" }} onClick={() => setNewCom({...newCom, membres: newCom.membres.filter(x => x !== m)})} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "11px", color: "#666", marginTop: "10px" }}>* Les directeurs de thèse sont ajoutés automatiquement.</p>
            </div>
          </div>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button onClick={() => setIsCreating(false)} style={styles.btnSecondary}>Annuler</button>
            <button onClick={handleSave} style={styles.btnSuccess}>Confirmer la Commission</button>
          </div>
        </div>
      ) : (
        /* Liste des commissions */
        <div style={{ display: "grid", gap: "15px" }}>
          {commissions.map(c => (
            <div key={c.id} style={styles.cardResult}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <strong><FaCalendarAlt /> {c.date}</strong> à {c.heure} <br/>
                  <span style={{ color: "#666" }}>Lieu: {c.lieu}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: "bold", color: "#003366" }}>{c.sujets.length} Sujets</div>
                  <div style={{ fontSize: "12px" }}>{c.membres.length} Membres</div>
                </div>
              </div>
            </div>
          ))}
          {commissions.length === 0 && <p style={{ color: "#888", fontStyle: "italic" }}>Aucune commission programmée.</p>}
        </div>
      )}
    </div>
  );
}

const styles = {
  btnPrimary: { background: "#003366", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" },
  btnSuccess: { background: "#28a745", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" },
  btnSecondary: { background: "#6c757d", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" },
  card: { background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
  cardResult: { background: "#fff", padding: "15px", borderRadius: "8px", borderLeft: "4px solid #003366", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" },
  input: { padding: "8px", border: "1px solid #ccc", borderRadius: "4px", width: "100%", boxSizing: "border-box" },
  columnBox: { background: "#f9f9f9", padding: "15px", borderRadius: "6px", border: "1px solid #eee" },
  listBox: { maxHeight: "150px", overflowY: "auto", background: "#fff", border: "1px solid #ddd", borderRadius: "4px" },
  listItemClickable: { padding: "8px", borderBottom: "1px solid #eee", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" },
  tag: { display: "inline-flex", alignItems: "center", background: "#e2e6ea", padding: "5px 10px", borderRadius: "15px", fontSize: "12px", marginRight: "5px", marginBottom: "5px" }
};