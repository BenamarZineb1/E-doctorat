import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { theme } from "../theme";
import heroImg from "../assets/hero-doctorat.png";
import usmbaImg from "../assets/logo-usmba.jpg";

export default function Home() {
  return (
    <div style={{ backgroundColor: theme.colors.background, minHeight: "100vh", fontFamily: theme.fonts.main }}>
      <Navbar />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.title}>
              L'excellence doctorale à l'<span style={{ color: theme.colors.secondary }}>USMBA</span>
            </h1>
            <p style={styles.desc}>
              Plateforme officielle de gestion des doctorats de l'USMBA. Suivez vos recherches et connectez-vous avec l'excellence académique.
            </p>
            <div style={styles.ctaGroup}>
              <Link to="/login" state={{ role: "Candidat" }} style={styles.ctaBtn}>
                Espace Candidat
              </Link>
              <Link to="/choix-role" style={styles.secondaryBtn}>
                Espace Administration
              </Link>
            </div>
          </div>
          <div style={styles.heroImageContainer}>
            <img src={heroImg} alt="Doctorat USMBA" style={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* INFO */}
      <section style={styles.infoSection}>
        <div style={styles.infoContent}>
          <div style={styles.infoImageContainer}>
            <img src={usmbaImg} alt="USMBA Fès" style={styles.infoImage} />
          </div>
          <div style={styles.infoText}>
            <h2 style={styles.sectionTitle}>Université Sidi Mohamed Ben Abdellah - Fès</h2>
            <p style={styles.infoDesc}>
              Fondée en 1975, l'USMBA offre un environnement stimulant pour la recherche scientifique.
            </p>
            <ul style={styles.list}>
              <li>Formation doctorale pluridisciplinaire</li>
              <li>Centres de recherche et laboratoires</li>
              <li>Rayonnement national et international</li>
            </ul>
            <a href="https://www.usmba.ac.ma/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              Découvrir l'université →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h3>Université Sidi Mohamed Ben Abdellah</h3>
          <p>+212 535 609 660 • reclamation.gcd@usmba.ac.ma</p>
          <p>Route d'Imouzzer B.P.2626, Fès, Maroc</p>
          <div style={styles.footerBottom}>&copy; {new Date().getFullYear()} e-Doctorat USMBA</div>
        </div>
      </footer>
    </div>
  );
}

// ====== Styles simplifiés ======
const styles = {
  hero: { padding: "80px 5%", background: theme.colors.background },
  heroContent: { display: "flex", maxWidth: "1200px", margin: "0 auto", alignItems: "center", gap: "50px", flexWrap: "wrap" },
  heroText: { flex: 1 },
  title: { fontSize: "2.5rem", color: theme.colors.primary, fontWeight: "700", marginBottom: "20px" },
  desc: { fontSize: "1.1rem", color: theme.colors.textMuted, marginBottom: "20px" },
  ctaGroup: { display: "flex", gap: "16px" },
  ctaBtn: { padding: "12px 24px", background: theme.colors.secondary, color: theme.colors.white, textDecoration: "none", borderRadius: "8px" },
  secondaryBtn: { padding: "12px 24px", background: "transparent", color: theme.colors.primary, textDecoration: "none", borderRadius: "8px", border: `1px solid ${theme.colors.primary}` },
  heroImageContainer: { flex: 1, display: "flex", justifyContent: "center" },
  heroImage: { width: "100%", maxWidth: "400px", borderRadius: "16px" },

  infoSection: { padding: "80px 5%", backgroundColor: theme.colors.surface },
  infoContent: { display: "flex", maxWidth: "1200px", margin: "0 auto", alignItems: "center", gap: "50px", flexWrap: "wrap-reverse" },
  infoImageContainer: { flex: 1 },
  infoImage: { width: "100%", borderRadius: "16px" },
  infoText: { flex: 1 },
  sectionTitle: { fontSize: "2rem", color: theme.colors.primary, fontWeight: "700", marginBottom: "15px" },
  infoDesc: { fontSize: "1rem", color: theme.colors.textMuted, marginBottom: "15px" },
  list: { padding: 0, marginBottom: "15px", listStyle: "disc", marginLeft: "20px" },
  link: { color: theme.colors.secondary, textDecoration: "none", fontWeight: "500" },

  footer: { padding: "40px 5%", backgroundColor: theme.colors.primary, color: theme.colors.white, textAlign: "center" },
  footerContent: {},
  footerBottom: { marginTop: "20px", fontSize: "0.9rem", opacity: 0.7 },
};
