import React from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaBook, FaUserGraduate, FaCalendarCheck, FaClipboardList, FaSignOutAlt, FaUniversity } from "react-icons/fa";

export default function LayoutCED() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // --- CORRECTION DU BUG DE REDIRECTION ---
  const handleLogout = () => {
    // 1. On navigue vers la page d'accueil
    navigate("/");

    // 2. On attend 100ms que la navigation se fasse avant de supprimer l'utilisateur.
    // Cela empêche le ProtectedRoute de nous renvoyer vers /login.
    setTimeout(() => {
      setUser(null);
    }, 100);
  };
  // ----------------------------------------

  const menuItems = [
    { path: "/ced/sujets", label: "Sujets de Thèse", icon: <FaBook /> },
    { path: "/ced/candidats", label: "Candidats", icon: <FaUserGraduate /> },
    { path: "/ced/commissions", label: "Commissions", icon: <FaCalendarCheck /> },
    { path: "/ced/resultats", label: "Résultats", icon: <FaClipboardList /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6f9" }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", backgroundColor: "#fff", borderRight: "1px solid #ddd", position: "fixed", height: "100vh", zIndex: 100 }}>
        <div style={{ padding: "20px", borderBottom: "1px solid #eee", textAlign: "center", background: "#f8f9fa" }}>
          <FaUniversity size={30} color="#003366" />
          <h3 style={{ color: "#003366", margin: "10px 0 5px", fontSize: "16px" }}>Direction CED</h3>
          <p style={{ color: "#666", fontSize: "12px", margin: 0 }}>{user?.nom || "Admin"}</p>
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

      {/* Main Content */}
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