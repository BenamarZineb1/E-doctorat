import React from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaChalkboardTeacher, FaUserGraduate, FaClipboardList, FaUsers, FaSignOutAlt, FaUniversity, FaListAlt } from "react-icons/fa";

// 1. IMPORTATION DE L'IMAGE (Le chemin ../../ remonte de 'pages/professeur' vers 'src')
import logoUniv from "../../assets/image.png";

export const styles = {
  container: { padding: "20px" },
  title: { color: "#003366", fontSize: "22px", fontWeight: "700", marginBottom: "20px", borderBottom: "2px solid #eee", paddingBottom: "10px" },
  table: { width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" },
  th: { backgroundColor: "#f8f9fa", padding: "15px", textAlign: "left", color: "#003366", fontWeight: "bold", borderBottom: "2px solid #eee" },
  td: { padding: "15px", borderBottom: "1px solid #eee", color: "#555", verticalAlign: "middle" },
  btnPrimary: { backgroundColor: "#003366", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "600", fontSize: "14px" },
  btnDanger: { backgroundColor: "#dc3545", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "600", fontSize: "14px", marginLeft: "10px" },
  badge: (type) => ({
    padding: "5px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold", display: "inline-block",
    backgroundColor: type === "success" ? "#d4edda" : type === "warn" ? "#fff3cd" : "#f8d7da",
    color: type === "success" ? "#155724" : type === "warn" ? "#856404" : "#721c24"
  })
};

export default function LayoutProf() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
    setTimeout(() => {
      setUser(null);
    }, 100);
  };

  const menuItems = [
    { path: "/professeur/sujetprof", label: "Mes Sujets", icon: <FaChalkboardTeacher /> },
    { path: "/professeur/candidatprof", label: "Mes Candidats", icon: <FaUserGraduate /> },
    { path: "/professeur/commissionprof", label: "Mes Commissions", icon: <FaUsers /> },
    { path: "/professeur/resultatprof", label: "Mes Résultats", icon: <FaListAlt /> },
    { path: "/professeur/inscritsprof", label: "Mes Inscrits", icon: <FaClipboardList /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6f9", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* SIDEBAR */}
      <aside style={{ width: "260px", backgroundColor: "#fff", borderRight: "1px solid #ddd", position: "fixed", height: "100vh", zIndex: 100 }}>
        <div style={{ padding: "20px", borderBottom: "1px solid #eee", textAlign: "center", background: "#f8f9fa" }}>
          {/* Icône et titre Sidebar */}
          <FaUniversity size={30} color="#003366" />
          <h3 style={{ color: "#003366", margin: "10px 0 5px", fontSize: "16px" }}>Espace Professeur</h3>
          <p style={{ color: "#666", fontSize: "12px", margin: 0 }}>
            {user ? `${user.prenom || ""} ${user.nom || ""}` : "Professeur"}
          </p>
        </div>

        <nav style={{ marginTop: "10px" }}>
          {menuItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <Link key={item.path} to={item.path} style={{
                display: "flex", alignItems: "center", padding: "12px 20px",
                textDecoration: "none", color: isActive ? "#8B1E3F" : "#444",
                fontWeight: isActive ? "600" : "normal",
                backgroundColor: isActive ? "#fff0f3" : "transparent",
                borderLeft: isActive ? "4px solid #8B1E3F" : "4px solid transparent",
                transition: "all 0.2s"
              }}>
                <span style={{ marginRight: "12px", fontSize: "1.1em" }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main style={{ marginLeft: "260px", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* HEADER */}
        <header style={{ height: "70px", background: "#fff", padding: "0 30px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", position: "sticky", top: 0, zIndex: 90 }}>

          {/* --- ICI : REMPLACEMENT DU TEXTE PAR LE LOGO --- */}
          <img
            src={logoUniv}
            alt="Université Sidi Mohamed Ben Abdellah"
            style={{ height: "50px", objectFit: "contain" }}
          />
          {/* ----------------------------------------------- */}

          <button onClick={handleLogout} style={{ border: "none", background: "transparent", color: "#d9534f", cursor: "pointer", display: "flex", alignItems: "center", fontWeight: "600" }}>
            <FaSignOutAlt style={{ marginRight: "8px" }} /> Déconnexion
          </button>
        </header>

        <div style={{ padding: "30px" }}>
          <Outlet />
        </div>

      </main>
    </div>
  );
}