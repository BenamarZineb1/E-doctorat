import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaUser, FaGraduationCap, FaEdit, FaFolderOpen, FaBell, FaSignOutAlt } from "react-icons/fa";
import uniLogo from "../../assets/image.png"; // Assurez-vous que le chemin est correct

// Styles exportés pour être réutilisés dans les pages enfants (InfoTab, ParcoursTab, etc.)
export const commonStyles = {
  card: { background: "#fff", padding: "25px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" },
  title: { color: "#003366", fontSize: "22px", fontWeight: "700", marginBottom: "20px", borderBottom: "2px solid #eee", paddingBottom: "10px" },
  label: { display: "block", marginBottom: "5px", color: "#333", fontWeight: "600", fontSize: "14px" },
  input: { width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", marginBottom: "15px" },
  btnPrimary: { background: "#003366", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" },
  btnSuccess: { background: "#28a745", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" },
  btnDanger: { background: "#dc3545", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontSize: "13px" },
};

export default function LayoutCandidat({ children }) {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // --- CORRECTION DU BUG DE REDIRECTION (LOGOUT) ---
  const handleLogout = () => {
    // 1. On navigue d'abord vers la page d'accueil publique
    navigate("/");

    // 2. On attend un court instant (100ms) avant de supprimer l'utilisateur.
    // Cela empêche le composant ProtectedRoute de forcer une redirection vers /login.
    setTimeout(() => {
      setUser(null);
    }, 100);
  };
  // -------------------------------------------------

  const getInitials = () => {
    if (!user) return "AG";
    const prenom = user.prenom ? user.prenom[0] : "";
    const nom = user.nom ? user.nom[0] : "";
    return (prenom + nom).toUpperCase();
  };

  const menuItems = [
    { path: "/candidat/info_personnels", label: "Informations Personnelles", icon: <FaUser /> },
    { path: "/candidat/parcours", label: "Parcours", icon: <FaGraduationCap /> },
    { path: "/candidat/postuler", label: "Postuler", icon: <FaEdit /> },
    { path: "/candidat/sujets_choisies", label: "Mes Choix", icon: <FaFolderOpen /> },
    { path: "/candidat/notifications", label: "Notifications", icon: <FaBell /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6f9", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* SIDEBAR */}
      <aside style={{ width: "280px", backgroundColor: "#fff", borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", position: "fixed", height: "100vh", zIndex: 100 }}>

        {/* En-tête Sidebar (Logo + Profil) */}
        <div style={{ padding: "30px 20px", textAlign: "center", borderBottom: "1px solid #eee", backgroundColor: "#fafafa" }}>
          <img src={uniLogo} alt="Université" style={{ height: "50px", marginBottom: "15px" }} />

          <div style={{
            width: "80px", height: "80px", margin: "0 auto 15px", borderRadius: "50%",
            background: "#003366", color: "#fff", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "24px", fontWeight: "bold", border: "2px solid #003366"
          }}>
            {user && user.photo ? (
              <img src={user.photo} alt="Profil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span>{getInitials()}</span>
            )}
          </div>

          <h3 style={{ margin: "0", color: "#003366", fontSize: "16px" }}>
            {user ? `${user.prenom || ""} ${user.nom || ""}` : "Candidat"}
          </h3>
          <p style={{ margin: "5px 0 0", color: "#666", fontSize: "13px" }}>
            {user ? user.email : ""}
          </p>
        </div>

        {/* Menu de navigation */}
        <nav style={{ flex: 1, padding: "20px 0", overflowY: "auto" }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} style={{
                display: "flex", alignItems: "center", padding: "12px 25px", textDecoration: "none",
                color: isActive ? "#fff" : "#444",
                backgroundColor: isActive ? "#8B1E3F" : "transparent",
                borderLeft: isActive ? "4px solid #003366" : "4px solid transparent",
                transition: "all 0.2s"
              }}>
                <span style={{ marginRight: "12px", fontSize: "16px" }}>{item.icon}</span>
                <span style={{ fontSize: "14px", fontWeight: isActive ? "600" : "400" }}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main style={{ marginLeft: "280px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header du haut */}
        <header style={{ height: "60px", background: "#fff", borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px", position: "sticky", top: 0, zIndex: 90 }}>
          <div style={{ fontWeight: "bold", color: "#003366", fontSize: "18px" }}>Espace Candidat</div>

          <button onClick={handleLogout} style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", color: "#8B1E3F", cursor: "pointer", fontWeight: "600" }}>
            <FaSignOutAlt /> Déconnexion
          </button>
        </header>

        {/* Zone de contenu variable (Les pages s'affichent ici) */}
        <div style={{ padding: "30px" }}>
            {children}
        </div>
      </main>
    </div>
  );
}