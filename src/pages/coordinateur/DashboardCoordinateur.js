import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

export default function DashboardCoordinateur() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.welcome}>
          <h2 style={styles.welcomeText}>Welcome, Coordinateur!</h2>
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
        <h1 style={styles.title}>Coordinateur</h1>
        <p style={styles.desc}>Bienvenue dans votre espace coordinateur !</p>
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
  desc: { fontSize: "16px", color: "#1F2937", textAlign: "center" },
};
