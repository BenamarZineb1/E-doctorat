import React from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaBook, FaUsers, FaEnvelopeOpenText, FaListAlt, FaSignOutAlt, FaHome, FaUniversity } from "react-icons/fa";

export default function LayoutLabo() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // --- CORRECTION DU BUG DE REDIRECTION (LOGOUT) ---
  const handleLogout = () => {
    // 1. On navigue d'abord vers la page d'accueil
    navigate("/");

    // 2. On attend 100ms avant de supprimer l'utilisateur du contexte.
    // Cela permet d'éviter que le ProtectedRoute ne nous renvoie vers /login.
    setTimeout(() => {
      setUser(null);
    }, 100);
  };
  // -------------------------------------------------

  const menuItems = [
    { path: "/labo/dashboard", label: "Sujets & Affectations", icon: <FaHome /> },
    { path: "/labo/commissions", label: "Commissions", icon: <FaUsers /> },
    { path: "/labo/preselection", label: "Présélection & Convoc.", icon: <FaEnvelopeOpenText /> },
    { path: "/labo/resultats", label: "Résultats Finaux", icon: <FaListAlt /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6f9", fontFamily: "Segoe UI, sans-serif" }}>
      {/* SIDEBAR */}
      <aside style={{ width: "260px", backgroundColor: "#fff", borderRight: "1px solid #ddd", position: "fixed", height: "100vh", zIndex: 100 }}>
        <div style={{ padding: "20px", borderBottom: "1px solid #eee", textAlign: "center", background: "#f8f9fa" }}>
          <FaUniversity size={30} color="#003366" />
          <h3 style={{ color: "#003366", margin: "10px 0 5px", fontSize: "16px" }}>Laboratoire IA & Data</h3>
          <p style={{ color: "#666", fontSize: "12px", margin: 0 }}>
            {user ? user.nom : "Directeur"}
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
        <header style={{ height: "60px", background: "#fff", padding: "0 30px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", position: "sticky", top: 0, zIndex: 90 }}>
          <span style={{ fontWeight: "700", color: "#003366", fontSize: "18px" }}>Université Sidi Mohamed Ben Abdellah</span>
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