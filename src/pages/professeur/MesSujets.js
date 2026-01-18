import React, { useState } from "react";
import { styles } from "./LayoutProf";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function MesSujets() {
  const [showModal, setShowModal] = useState(false);
  const [sujets, setSujets] = useState([
    { id: 1, titre: "Optimisation des réseaux de neurones", desc: "Étude sur l'efficacité...", codir: "Non", formation: "IA" },
    { id: 2, titre: "Sécurité des systèmes IoT", desc: "Protocoles de sécurité...", codir: "Oui", formation: "Systèmes Info" },
  ]);

  const [newSujet, setNewSujet] = useState({ titre: "", desc: "", codir: "", formation: "" });

  const handleAdd = () => {
    setSujets([...sujets, { ...newSujet, id: Date.now() }]);
    setShowModal(false);
    setNewSujet({ titre: "", desc: "", codir: "", formation: "" });
  };

  const modalStyles = {
    overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
    content: { backgroundColor: "#fff", padding: "25px", borderRadius: "8px", width: "500px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
    input: { width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" },
    textarea: { width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc", height: "80px" }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mes Sujets</h2>

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <button style={styles.btnPrimary} onClick={() => setShowModal(true)}>
          <FaPlus style={{ marginRight: "8px" }} /> Ajouter un sujet
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Titre Sujet</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Co-directeur</th>
            <th style={styles.th}>Formation</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {sujets.map((s) => (
            <tr key={s.id}>
              <td style={styles.td}>{s.titre}</td>
              <td style={styles.td}>{s.desc}</td>
              <td style={styles.td}>{s.codir}</td>
              <td style={styles.td}>{s.formation}</td>
              <td style={styles.td}>
                <button style={{ ...styles.btnPrimary, backgroundColor: "#FFA500", marginRight: "5px" }}><FaEdit /></button>
                <button style={{ ...styles.btnPrimary, backgroundColor: "#dc3545" }}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.content}>
            <h3 style={{ color: "#003366", marginBottom: "15px" }}>Ajout du sujet</h3>
            <input
              style={modalStyles.input} placeholder="Titre (Max 512 car.)"
              value={newSujet.titre} onChange={(e) => setNewSujet({...newSujet, titre: e.target.value})}
            />
            <textarea
              style={modalStyles.textarea} placeholder="Description (Max 2048 car.)"
              value={newSujet.desc} onChange={(e) => setNewSujet({...newSujet, desc: e.target.value})}
            />
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <select style={modalStyles.input} onChange={(e) => setNewSujet({...newSujet, codir: e.target.value})}>
                 <option>Co-Directeur ?</option><option>Oui</option><option>Non</option>
              </select>
              <select style={modalStyles.input} onChange={(e) => setNewSujet({...newSujet, formation: e.target.value})}>
                 <option>Formation Doctorale</option><option>IA</option><option>Systèmes</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setShowModal(false)} style={{ ...styles.btnPrimary, backgroundColor: "#6c757d" }}>Annuler</button>
              <button onClick={handleAdd} style={styles.btnPrimary}>Confirmer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}