import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// Assure-toi d'avoir créé ce fichier (je te le donne juste après)
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Utilisation du contexte global

  // Récupération du rôle (Candidat par défaut si accès direct)
  const selectedRole = location.state?.role || "Candidat";
  const isCandidat = selectedRole === "Candidat";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. SIMULATION DU BACKEND (À remplacer par fetch/axios)
    console.log(`Tentative de connexion : ${email} en tant que ${selectedRole}`);

    // On crée un faux utilisateur connecté pour la démo
    const loggedUser = {
      email,
      role: selectedRole,
      firstName: "Utilisateur",
      token: "fake-jwt-token"
    };

    // 2. On stocke l'utilisateur dans le Context global
    setUser(loggedUser);

    // 3. TABLE DE REDIRECTION INTELLIGENTE
    const roleRedirects = {
      "Candidat": "/candidat-dashboard",
      "Professeur": "/professeur-dashboard",
      "Directeur de laboratoire": "/directeur-labo-dashboard",
      "Directeur de CED": "/directeur-dashboard",
      "Directeur de pôle": "/directeur-pole-dashboard",
      "Scolarité": "/scolarite-dashboard",
      "Coordinateur": "/coordinateur-dashboard"
    };

    // Redirection vers le bon dashboard ou l'accueil par défaut
    const redirectTo = roleRedirects[selectedRole] || "/";
    navigate(redirectTo);
  };

  const handleAcademicLogin = () => {
    alert("Redirection vers le portail CAS de l'USMBA...");
    // navigate("/sso-login");
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar /> {/* Garde la barre de navigation pour la cohérence */}

      <div style={styles.container}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          <FaArrowLeft style={{ marginRight: "8px" }} /> Retour
        </button>

        <h1 style={styles.title}>Connexion</h1>

        {/* Badge du rôle */}
        <div style={styles.roleBadge}>
          Espace <strong>{selectedRole}</strong>
        </div>

        {/* Bouton USMBA */}
        <p style={styles.info}>
          Vous disposez d'un compte académique (@usmba.ac.ma) ?
        </p>
        <button onClick={handleAcademicLogin} style={styles.academicBtn}>
          Se connecter avec Email Académique
        </button>

        <div style={styles.divider}>
          <span>OU</span>
        </div>

        {/* Formulaire classique */}
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email personnel (Gmail, Yahoo...)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <div style={styles.row}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Se souvenir de moi
            </label>
            <Link to="/recover-account" style={styles.recover}>
              Mot de passe oublié ?
            </Link>
          </div>

          <button type="submit" style={styles.button}>Se connecter</button>
        </form>

        {/* LOGIQUE IMPORTANTE : Seulement les candidats peuvent s'inscrire */}
        {isCandidat && (
          <p style={styles.switch}>
            Vous n'avez pas de compte ?{" "}
            <Link to="/register" state={{ role: selectedRole }} style={styles.link}>
              Créer un compte Candidat
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

// --- STYLES ---
const styles = {
  pageContainer: {
    minHeight: "100vh",
    backgroundColor: "#F7FAFC",
    fontFamily: "'Segoe UI', sans-serif",
  },
  container: {
    maxWidth: "450px",
    margin: "40px auto",
    padding: "40px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  title: { fontSize: "28px", fontWeight: "bold", color: "#003366", marginBottom: "10px" },
  roleBadge: {
    display: "inline-block",
    padding: "5px 15px",
    backgroundColor: "#FFF5F5",
    color: "#8B1E3F",
    borderRadius: "20px",
    fontSize: "14px",
    marginBottom: "25px",
    border: "1px solid #8B1E3F"
  },
  info: { fontSize: "14px", color: "#4A5568", marginBottom: "10px" },
  academicBtn: {
    width: "100%",
    background: "#003366", // Bleu USMBA pour l'institutionnel
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "20px",
    fontSize: "0.95rem"
  },
  divider: {
    display: "flex", alignItems: "center", textAlign: "center", margin: "20px 0", color: "#A0AEC0", fontSize: "12px"
  },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #E2E8F0",
    fontSize: "16px",
    outline: "none",
    backgroundColor: "#FAFAFA"
  },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "#4A5568" },
  checkboxLabel: { display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" },
  recover: { color: "#003366", textDecoration: "none", fontWeight: "600" },
  button: {
    padding: "14px",
    background: "#8B1E3F", // Rouge pour l'action principale du formulaire
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px"
  },
  switch: { marginTop: "25px", fontSize: "14px", color: "#4A5568" },
  link: { color: "#8B1E3F", fontWeight: "bold", textDecoration: "none" },
  backBtn: {
    display: "flex", alignItems: "center", background: "none", border: "none", color: "#718096", cursor: "pointer", fontSize: "14px", marginBottom: "10px", padding: 0
  },
};