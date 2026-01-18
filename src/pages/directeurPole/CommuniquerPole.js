import React, { useState } from "react";
import { FaBullhorn, FaDownload, FaCheckCircle, FaLock } from "react-icons/fa";

export default function CommuniquerPole() {
  // États de publication (Mock data)
  const [published, setPublished] = useState({
    sujets: true,
    listePrincipale: false,
    listeAttente: false
  });

  const togglePublish = (key) => {
    const newVal = !published[key];
    if (window.confirm(`Voulez-vous vraiment ${newVal ? "PUBLIER" : "RETIRER"} cet élément pour le public ?`)) {
      setPublished({ ...published, [key]: newVal });
    }
  };

  return (
    <div>
      <h2 style={{ color: "#003366" }}>Communication & Publications</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "20px" }}>

        {/* CARTE 1: SUJETS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>1. Liste des Sujets</h3>
          <p style={styles.desc}>Rendre les sujets visibles pour que les candidats puissent postuler.</p>
          <div style={styles.statusBox(published.sujets)}>
            {published.sujets ? "PUBLIÉ" : "NON PUBLIÉ"}
          </div>
          <div style={styles.actions}>
            <button onClick={() => togglePublish("sujets")} style={published.sujets ? styles.btnRevoke : styles.btnPublish}>
              {published.sujets ? <><FaLock style={{marginRight:5}} /> Retirer</> : <><FaBullhorn style={{marginRight:5}} /> Publier</>}
            </button>
          </div>
        </div>

        {/* CARTE 2: LISTE PRINCIPALE */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>2. Liste Principale</h3>
          <p style={styles.desc}>Publier les résultats finaux (Candidats admis définitivement).</p>
          <div style={styles.statusBox(published.listePrincipale)}>
            {published.listePrincipale ? "PUBLIÉ" : "NON PUBLIÉ"}
          </div>
          <div style={styles.actions}>
             <button style={styles.btnDownload}><FaDownload style={{marginRight:5}} /> PDF</button>
            <button onClick={() => togglePublish("listePrincipale")} style={published.listePrincipale ? styles.btnRevoke : styles.btnPublish}>
              {published.listePrincipale ? "Retirer" : "Publier"}
            </button>
          </div>
        </div>

        {/* CARTE 3: LISTE D'ATTENTE */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>3. Liste d'Attente</h3>
          <p style={styles.desc}>Publier la liste d'attente ordonnée par mérite.</p>
          <div style={styles.statusBox(published.listeAttente)}>
            {published.listeAttente ? "PUBLIÉ" : "NON PUBLIÉ"}
          </div>
          <div style={styles.actions}>
            <button style={styles.btnDownload}><FaDownload style={{marginRight:5}} /> PDF</button>
            <button onClick={() => togglePublish("listeAttente")} style={published.listeAttente ? styles.btnRevoke : styles.btnPublish}>
              {published.listeAttente ? "Retirer" : "Publier"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  card: { background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textAlign: "center", display: "flex", flexDirection: "column" },
  cardTitle: { color: "#003366", margin: "0 0 10px 0", fontSize: "16px" },
  desc: { fontSize: "13px", color: "#666", flex: 1, marginBottom: "15px" },
  statusBox: (active) => ({
    margin: "0 auto 15px auto", padding: "5px 15px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold",
    background: active ? "#d4edda" : "#f8d7da", color: active ? "#155724" : "#721c24", width: "fit-content"
  }),
  actions: { display: "flex", justifyContent: "center", gap: "10px" },
  btnPublish: { background: "#003366", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", fontSize: "13px" },
  btnRevoke: { background: "#dc3545", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", fontSize: "13px" },
  btnDownload: { background: "#6c757d", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", fontSize: "13px" }
};