import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCamera } from "react-icons/fa";

// --- THÈME PARTAGÉ (Identique à Login) ---
const theme = {
  primary: "#003366",
  secondary: "#8B1E3F",
  bg: "#F7FAFC",
  text: "#2D3748",
  border: "#E2E8F0",
  white: "#FFFFFF",
  shadow: "0 10px 25px rgba(0,0,0,0.08)",
};

export default function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state?.role || "Candidat";

  const [formData, setFormData] = useState({
    nom: "", prenom: "", dateNaissance: "", lieuNaissance: "",
    email: "", telephone: "", cne: "", typeDoc: "CNIE", numDoc: "",
    password: "", confirmPassword: "", photoProfil: null, acceptTerms: false
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file" && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Erreur : Les mots de passe ne correspondent pas.");
      return;
    }
    console.log("Inscription:", formData);
    navigate("/login", { state: { role } });
  };

  return (
    <div style={styles.pageContainer}>
      {/* Pas de Navbar ici pour garder le focus sur le long formulaire */}
      <div style={styles.centerContent}>
        <div style={styles.card}>

          <button onClick={() => navigate(-1)} style={styles.backBtn}>
            <FaArrowLeft style={{ marginRight: "6px" }} /> Retour
          </button>

          <h2 style={styles.title}>Créer un compte</h2>
          <div style={styles.roleBadge}>Candidature Doctorale</div>

          <form onSubmit={handleRegister} style={styles.form}>

            {/* Photo de profil */}
            <div style={styles.photoSection}>
              <div style={styles.avatarWrapper}>
                {photoPreview ? <img src={photoPreview} alt="Aperçu" style={styles.avatar} /> : <FaCamera size={30} color="#CBD5E0" />}
              </div>
              <label style={styles.linkBold}>
                Choisir une photo
                <input type="file" name="photoProfil" accept="image/*" onChange={handleChange} style={{ display: "none" }} />
              </label>
            </div>

            {/* Section 1 : Identité */}
            <div style={styles.sectionHeader}>Informations Personnelles</div>
            <div style={styles.row}>
              <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required style={styles.input} />
              <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} required style={styles.input} />
            </div>
            <div style={styles.row}>
              <input type="date" name="dateNaissance" onChange={handleChange} required style={styles.input} />
              <input type="text" name="lieuNaissance" placeholder="Lieu de naissance" onChange={handleChange} required style={styles.input} />
            </div>

            {/* Section 2 : Dossier */}
            <div style={styles.sectionHeader}>Dossier Administratif</div>
            <div style={styles.row}>
              <input type="text" name="cne" placeholder="CNE / Code Massar" onChange={handleChange} required style={styles.input} />
              <input type="text" name="numDoc" placeholder="N° CNIE / Passeport" onChange={handleChange} required style={styles.input} />
            </div>
            <div style={styles.row}>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
              <input type="tel" name="telephone" placeholder="Téléphone" onChange={handleChange} required style={styles.input} />
            </div>

            {/* Section 3 : Sécurité */}
            <div style={styles.sectionHeader}>Sécurité</div>
            <div style={styles.row}>
              <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required style={styles.input} />
              <input type="password" name="confirmPassword" placeholder="Confirmer MDP" onChange={handleChange} required style={styles.input} />
            </div>

            <div style={styles.checkboxContainer}>
              <input type="checkbox" name="acceptTerms" onChange={handleChange} required />
              <label style={{ fontSize: "0.9rem", color: theme.text }}>Je certifie l'exactitude des informations fournies.</label>
            </div>

            <button type="submit" style={styles.actionBtn}>S'inscrire</button>
          </form>

          <div style={styles.footer}>
            <p style={{ color: "#718096", margin: 0 }}>Déjà inscrit ?</p>
            <Link to="/login" state={{ role }} style={styles.linkBold}>Se connecter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles (Identiques à Login, juste maxWidth ajusté pour le formulaire large)
const styles = {
  pageContainer: { minHeight: "100vh", backgroundColor: theme.bg, fontFamily: "'Segoe UI', sans-serif" },
  centerContent: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: "40px 20px" },
  card: { backgroundColor: theme.white, padding: "40px", borderRadius: "16px", boxShadow: theme.shadow, width: "100%", maxWidth: "700px", position: "relative" }, // Seule différence : maxWidth 700px
  backBtn: { position: "absolute", top: "20px", left: "20px", background: "none", border: "none", color: "#718096", cursor: "pointer", display: "flex", alignItems: "center", fontSize: "0.9rem" },
  title: { color: theme.primary, fontSize: "2rem", marginBottom: "5px", textAlign: "center", marginTop: "10px" },
  roleBadge: { display: "block", width: "fit-content", margin: "0 auto 30px auto", backgroundColor: "#FFF5F5", color: theme.secondary, padding: "4px 12px", borderRadius: "20px", fontWeight: "bold", fontSize: "0.85rem", border: `1px solid ${theme.secondary}` },

  // Spécifique Register (Photo & Layout)
  photoSection: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px" },
  avatarWrapper: { width: "100px", height: "100px", borderRadius: "50%", background: "#EDF2F7", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: `3px solid ${theme.primary}`, marginBottom: "10px" },
  avatar: { width: "100%", height: "100%", objectFit: "cover" },

  form: { display: "flex", flexDirection: "column", gap: "15px" },
  sectionHeader: { fontSize: "1rem", fontWeight: "bold", color: theme.primary, borderBottom: "2px solid #E2E8F0", paddingBottom: "5px", marginTop: "10px" },
  row: { display: "flex", gap: "15px", flexWrap: "wrap" },
  input: { flex: 1, padding: "12px", borderRadius: "8px", border: `1px solid ${theme.border}`, fontSize: "1rem", outline: "none", minWidth: "220px", boxSizing: "border-box" },
  checkboxContainer: { display: "flex", gap: "10px", alignItems: "center", marginTop: "5px" },

  actionBtn: { width: "100%", padding: "14px", backgroundColor: theme.primary, color: "white", border: "none", borderRadius: "8px", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer", marginTop: "15px" },
  footer: { marginTop: "25px", borderTop: `1px solid ${theme.border}`, paddingTop: "20px", display: "flex", justifyContent: "center", gap: "10px", alignItems: "center" },
  linkBold: { color: theme.secondary, fontWeight: "bold", textDecoration: "none", cursor: "pointer" },
};