import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaChalkboardTeacher,
  FaUniversity,
  FaLayerGroup,
  FaBook,
  FaArrowLeft
} from "react-icons/fa";
import logoUsmba from "../assets/logo-usmba.jpg";

// Liste des rôles avec icônes (sans Coordinateur)
const roles = [
  { name: "Professeur", icon: <FaChalkboardTeacher size={36} /> },
  { name: "Directeur de laboratoire", icon: <FaUniversity size={36} /> },
  { name: "Directeur de CED", icon: <FaLayerGroup size={36} /> },
  { name: "Directeur de pôle", icon: <FaLayerGroup size={36} /> },
  { name: "Scolarité", icon: <FaBook size={36} /> },
];

export default function ChoixRole() {
  const navigate = useNavigate();

  const handleClick = (roleName) => {
    navigate("/login", { state: { role: roleName } });
  };

  return (
    <>
      <Navbar logo={logoUsmba} />

      <section style={styles.container}>
        {/* Bouton Retour */}
        <div style={{ textAlign: "left", maxWidth: "1000px", margin: "0 auto 20px" }}>
          <button onClick={() => navigate(-1)} style={styles.backBtn}>
            <FaArrowLeft style={{ marginRight: "5px", color: "#8B1E3F" }} /> Retour
          </button>
        </div>

        {/* Titre et sous-titre */}
        <h1 style={styles.title}>Sélectionnez votre rôle</h1>
        <p style={styles.subtitle}>Connectez-vous avec le rôle approprié pour accéder à votre espace</p>

        {/* Cartes des rôles */}
        <div style={styles.cardsContainer}>
          {roles.map((role) => (
            <div key={role.name} style={styles.card} onClick={() => handleClick(role.name)}>
              <div style={styles.icon}>{role.icon}</div>
              <h2 style={styles.cardTitle}>{role.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ===== Styles simplifiés =====
const styles = {
  container: { padding: "40px 15px", textAlign: "center", background: "#F5F5F5", minHeight: "100vh" },
  title: { fontSize: "28px", fontWeight: "700", color: "#003366", marginBottom: "10px" },
  subtitle: { fontSize: "14px", color: "#1F2937", marginBottom: "20px" },
  backBtn: { background: "none", border: "none", color: "#003366", cursor: "pointer", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center" },
  cardsContainer: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" },
  card: { flex: "1 1 180px", maxWidth: "200px", background: "#fff", borderRadius: "10px", padding: "15px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", color: "#003366" },
  cardTitle: { marginTop: "10px", fontSize: "16px", fontWeight: "600" },
  icon: { color: "#8B1E3F" } // Bordeaux
};
