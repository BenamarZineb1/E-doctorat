import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGraduationCap, FaFlask, FaBook, FaFileAlt, FaInfoCircle } from "react-icons/fa";
import { theme } from "../theme";
import logoUSMBA from "../assets/logo-usmba.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Pôle d’études", path: "/pole", icon: <FaGraduationCap /> },
    { name: "Laboratoires", path: "/laboratoires", icon: <FaFlask /> },
    { name: "Formations", path: "/formations", icon: <FaBook /> },
    { name: "Règlement", path: "/reglement", icon: <FaFileAlt /> },
    { name: "Informations", path: "/#info", icon: <FaInfoCircle /> },
  ];

  return (
    <header style={{
      ...styles.header,
      backgroundColor: scrolled ? "rgba(0, 51, 102, 0.95)" : theme.colors.primary,
      boxShadow: scrolled ? theme.shadows.md : "none",
      padding: scrolled ? "10px 5%" : "20px 5%",
    }}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logoLink}>
          <img src={logoUSMBA} alt="USMBA Logo" style={styles.logo} />
          <div style={styles.siteInfo}>
            <span style={styles.siteName}>E‑Doctorat</span>
            <span style={styles.universityName}>USMBA FÈS</span>
          </div>
        </Link>
      </div>

      {isMobile && (
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} color={theme.colors.white} /> : <FaBars size={24} color={theme.colors.white} />}
        </div>
      )}

      {(menuOpen || !isMobile) && (
        <nav style={{ ...styles.nav, ...(isMobile ? styles.navMobile : {}) }}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              state={link.state}
              style={{
                ...styles.link,
                ...(link.cta ? styles.cta : {}),
                backgroundColor: link.cta ? theme.colors.secondary : "transparent",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ fontSize: "1.1rem" }}>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}

          <div style={styles.actions}>
            <select style={styles.select}>
              <option>FR</option>
              <option>EN</option>
              <option>AR</option>
            </select>
          </div>
        </nav>
      )}
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "all 0.4s ease",
    backdropFilter: "blur(8px)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    gap: "12px",
  },
  logo: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    filter: "brightness(1.1)",
  },
  siteInfo: {
    display: "flex",
    flexDirection: "column",
  },
  siteName: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#fff",
    lineHeight: "1",
    letterSpacing: "-0.5px",
  },
  universityName: {
    fontSize: "0.75rem",
    fontWeight: "600",
    color: "rgba(255,255,255,0.7)",
    letterSpacing: "1px",
    marginTop: "2px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  navMobile: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    flexDirection: "column",
    background: "#003366",
    padding: "30px",
    gap: "20px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
  },
  link: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.9)",
    fontWeight: "600",
    fontSize: "0.95rem",
    padding: "8px 16px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
  },
  cta: {
    color: "#fff",
    boxShadow: "0 4px 12px rgba(139, 30, 63, 0.3)",
  },
  actions: {
    display: "flex",
    marginLeft: "10px",
  },
  select: {
    padding: "4px 8px",
    borderRadius: "4px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "0.85rem",
    outline: "none",
  },
  hamburger: {
    display: "flex",
    cursor: "pointer",
    padding: "8px",
  },
};
