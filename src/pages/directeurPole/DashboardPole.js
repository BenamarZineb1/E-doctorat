import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

export default function DashboardPole() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [profs, setProfs] = useState([{ id: 1, nom: "Prof A" }, { id: 2, nom: "Prof B" }]);
  const [candidats, setCandidats] = useState([{ id: 1, nom: "Dupont" }, { id: 2, nom: "Martin" }]);
  const [sujets, setSujets] = useState([{ id: 1, titre: "Sujet 1" }, { id: 2, titre: "Sujet 2" }]);
  const [calendrier, setCalendrier] = useState([
    { id: 1, action: "Dépôt sujets", dateDebut: "2023-09-01", dateFin: "2023-09-30", pour: "Prof" },
    { id: 2, action: "Candidatures", dateDebut: "2023-10-01", dateFin: "2023-10-15", pour: "Candidat" },
  ]);

  const handlePublierListe = (type) => {
    // Logique pour publier liste principale ou d'attente
    alert(`Liste ${type} publiée !`);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.welcome}>
          <h2 style={styles.welcomeText}>Welcome, Directeur de Pôle!</h2>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Déconnexion
        </button>
      </header>

      <div style={styles.container}>
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <button onClick={() => navigate(-1)} style={styles.backBtn}>
            <FaArrowLeft style={{ marginRight: "8px" }} /> Retour
          </button>
        </div>
        <h1 style={styles.title}>Directeur de Pôle</h1>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Profs</h2>
          <div style={styles.list}>
            {profs.map((p) => <div key={p.id} style={styles.item}><p>{p.nom}</p></div>)}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Candidats</h2>
          <div style={styles.list}>
            {candidats.map((c) => <div key={c.id} style={styles.item}><p>{c.nom}</p></div>)}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Sujets</h2>
          <div style={styles.list}>
            {sujets.map((s) => <div key={s.id} style={styles.item}><p>{s.titre}</p></div>)}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Calendrier</h2>
          <div style={styles.list}>
            {calendrier.map((cal) => (
              <div key={cal.id} style={styles.item}>
                <p>Action: {cal.action} | Début: {cal.dateDebut} | Fin: {cal.dateFin} | Pour: {cal.pour}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Publier Listes</h2>
          <button style={styles.publishBtn} onClick={() => handlePublierListe("Principale")}>Publier Liste Principale</button>
          <button style={styles.publishBtn} onClick={() => handlePublierListe("Attente")}>Publier Liste d'Attente</button>
        </section>
      </div>
    </>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "#003366",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  welcome: { flex: 1 },
  welcomeText: { fontSize: "20px", fontWeight: "600", margin: 0 },
  logoutBtn: {
    padding: "10px 20px",
    background: "#8B1E3F",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  backBtn: {
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "none",
    color: "#003366",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    padding: 0,
  },
  container: { padding: "20px", background: "#F5F6F8", minHeight: "100vh" },
  title: { fontSize: "32px", color: "#003366", fontWeight: "700", textAlign: "center", marginBottom: "30px" },
  section: { marginBottom: "40px" },
  sectionTitle: { fontSize: "24px", color: "#003366", fontWeight: "700", marginBottom: "20px" },
  list: { display: "flex", flexDirection: "column", gap: "15px" },
  item: { padding: "15px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" },
  publishBtn: { padding: "10px 20px", background: "#008000", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", marginRight: "10px" },
};