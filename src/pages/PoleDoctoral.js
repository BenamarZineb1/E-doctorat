import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";

export default function PoleDoctoral() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section style={styles.container}>
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <button onClick={() => navigate(-1)} style={styles.backBtn}>
            <FaArrowLeft style={{ marginRight: "8px" }} /> Retour
          </button>
        </div>
        <h1 style={styles.title}>Pôle d’études doctorales</h1>
        <p style={styles.subtitle}>
          Le Pôle d’études doctorales de l’USMBA a pour mission de coordonner les activités de recherche, d’accompagner les doctorants et de promouvoir l’excellence scientifique.
        </p>

        {/* Bloc d’infos / objectifs */}
        <div style={styles.infoCards}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Mission</h2>
            <p>Coordonner les activités de recherche et soutenir les doctorants dans leur parcours scientifique.</p>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Objectifs</h2>
            <p>Favoriser la qualité de la recherche, les partenariats nationaux et internationaux, et la publication scientifique.</p>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Programmes</h2>
            <p>Proposer et superviser les formations doctorales, les séminaires, et les workshops.</p>
          </div>
        </div>

        {/* Bouton candidature */}
        <div style={styles.ctaContainer}>
          <Link to="/choix-role" style={styles.ctaButton}>
            Postuler
          </Link>
        </div>
      </section>
    </>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#003366",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#1F2937",
    marginBottom: "30px",
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
  infoCards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    flex: "1 1 250px",
    background: "#F5F5F5",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#003366",
  },
  ctaContainer: {
    marginTop: "20px",
  },
  ctaButton: {
    textDecoration: "none",
    background: "#8B1E3F",
    color: "#fff",
    padding: "10px 24px",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "16px",
    transition: "all 0.3s",
  },
};
