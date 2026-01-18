import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Pages Communes / Publiques
import Home from "../pages/Home";
import ChoixRole from "../pages/ChoixRole";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PoleDoctoral from "../pages/PoleDoctoral";
import Laboratoires from "../pages/Laboratoires";
import Formations from "../pages/Formations";
import Reglement from "../pages/Reglement";

// --- IMPORTS CANDIDAT ---
import InfoTab from "../pages/candidat/InfoTab";
import ParcoursTab from "../pages/candidat/ParcoursTab";
import PostulerTab from "../pages/candidat/PostulerTab";
import MesCandidatures from "../pages/candidat/MesCandidatures";
import NotificationsTab from "../pages/candidat/NotificationsTab";

// --- IMPORTS PROFESSEUR (Mise à jour avec Layout) ---
import LayoutProf from "../pages/professeur/LayoutProf"; // Assurez-vous d'avoir ce fichier
import MesSujets from "../pages/professeur/MesSujets";
import MesCandidats from "../pages/professeur/MesCandidats";
import Commissions from "../pages/professeur/Commissions";
import Resultats from "../pages/professeur/Resultats";
import MesInscrits from "../pages/professeur/MesInscrits";

// --- IMPORTS DIRECTEUR LABORATOIRE ---
import LayoutLabo from "../pages/directeurLabo/LayoutLabo";
import DashboardLabo from "../pages/directeurLabo/DashboardLabo";
import CommissionsLabo from "../pages/directeurLabo/CommissionsLabo";
import PreselectionLabo from "../pages/directeurLabo/PreselectionLabo";
import ResultatsLabo from "../pages/directeurLabo/ResultatsLabo";

// --- IMPORTS DIRECTEUR POLE ---
import LayoutPole from "../pages/directeurPole/LayoutPole";
import SujetsPole from "../pages/directeurPole/SujetsPole";
import CandidatsPole from "../pages/directeurPole/CandidatsPole";
import CalendrierPole from "../pages/directeurPole/CalendrierPole";
import CommuniquerPole from "../pages/directeurPole/CommuniquerPole";
import InscriptionPole from "../pages/directeurPole/InscriptionPole";

// --- IMPORTS DIRECTEUR CED ---
import LayoutCED from "../pages/directeurCed/LayoutCED";
import SujetsCED from "../pages/directeurCed/SujetsCED";
import CandidatsCED from "../pages/directeurCed/CandidatsCED";
import CommissionsCED from "../pages/directeurCed/CommissionsCED";
import ResultatsCED from "../pages/directeurCed/ResultatsCED";

// --- IMPORTS SCOLARITÉ (Nouveau) ---
import LayoutScolarite from "../pages/scolarite/LayoutScolarite";
import ValiderCandidats from "../pages/scolarite/ValiderCandidats";
import InscriptionsScolarite from "../pages/scolarite/InscriptionsScolarite";
// J'ajoute ces imports si vous voulez compléter le menu, sinon on mettra des placeholders
import RechercheScolarite from "../pages/scolarite/RechercheScolarite";
import DocumentsScolarite from "../pages/scolarite/DocumentsScolarite";

// --- AUTRES ---
import CoordinateurDashboard from "../pages/coordinateur/DashboardCoordinateur";

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  // Vérification souple pour les rôles admin (ex: Directeur CED peut avoir role "Directeur de CED")
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* --- ROUTES PUBLIQUES --- */}
      <Route path="/" element={<Home />} />
      <Route path="/choix-role" element={<ChoixRole />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/infos-pole" element={<PoleDoctoral />} />
      <Route path="/laboratoires" element={<Laboratoires />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/reglement" element={<Reglement />} />

      {/* --- ROUTES CANDIDAT --- */}
      <Route path="/candidat-dashboard" element={<Navigate to="/candidat/info_personnels" replace />} />
      <Route path="/candidat/info_personnels" element={<ProtectedRoute role="Candidat"><InfoTab /></ProtectedRoute>} />
      <Route path="/candidat/parcours" element={<ProtectedRoute role="Candidat"><ParcoursTab /></ProtectedRoute>} />
      <Route path="/candidat/postuler" element={<ProtectedRoute role="Candidat"><PostulerTab /></ProtectedRoute>} />
      <Route path="/candidat/sujets_choisies" element={<ProtectedRoute role="Candidat"><MesCandidatures /></ProtectedRoute>} />
      <Route path="/candidat/notifications" element={<ProtectedRoute role="Candidat"><NotificationsTab /></ProtectedRoute>} />

      {/* --- ROUTES PROFESSEUR (Avec Layout) --- */}
      <Route path="/professeur-dashboard" element={<Navigate to="/professeur/sujetprof" replace />} />
      <Route path="/professeur" element={
        <ProtectedRoute role="Professeur">
          <LayoutProf />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="sujetprof" replace />} />
        <Route path="sujetprof" element={<MesSujets />} />
        <Route path="candidatprof" element={<MesCandidats />} />
        <Route path="commissionprof" element={<Commissions />} />
        <Route path="resultatprof" element={<Resultats />} />
        <Route path="inscritsprof" element={<MesInscrits />} />
      </Route>

      {/* --- ROUTES DIRECTEUR LABORATOIRE --- */}
      <Route path="/directeur-labo-dashboard" element={<Navigate to="/labo/dashboard" replace />} />
      <Route path="/labo" element={
          <ProtectedRoute role="Directeur de laboratoire">
            <LayoutLabo />
          </ProtectedRoute>
        }>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardLabo />} />
        <Route path="commissions" element={<CommissionsLabo />} />
        <Route path="preselection" element={<PreselectionLabo />} />
        <Route path="resultats" element={<ResultatsLabo />} />
      </Route>

      {/* --- ROUTES DIRECTEUR POLE --- */}
      <Route path="/directeur-pole-dashboard" element={<Navigate to="/pole/sujets" replace />} />
      <Route path="/pole" element={
          <ProtectedRoute role="Directeur de pôle">
            <LayoutPole />
          </ProtectedRoute>
        }>
        <Route index element={<Navigate to="sujets" replace />} />
        <Route path="sujets" element={<SujetsPole />} />
        <Route path="candidats" element={<CandidatsPole />} />
        <Route path="calendrier" element={<CalendrierPole />} />
        <Route path="communiquer" element={<CommuniquerPole />} />
        <Route path="inscription" element={<InscriptionPole />} />
      </Route>

      {/* --- ROUTES DIRECTEUR CED --- */}
      <Route path="/directeur-dashboard" element={<Navigate to="/ced/sujets" replace />} />
      <Route path="/ced" element={
          <ProtectedRoute role="Directeur de CED">
            <LayoutCED />
          </ProtectedRoute>
        }>
        <Route index element={<Navigate to="sujets" replace />} />
        <Route path="sujets" element={<SujetsCED />} />
        <Route path="candidats" element={<CandidatsCED />} />
        <Route path="commissions" element={<CommissionsCED />} />
        <Route path="resultats" element={<ResultatsCED />} />
      </Route>

      {/* --- ROUTES SCOLARITÉ (Nouveau avec Layout) --- */}
      <Route path="/scolarite-dashboard" element={<Navigate to="/scolarite/validation" replace />} />
      <Route path="/scolarite" element={
        <ProtectedRoute role="Scolarité">
          <LayoutScolarite />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="validation" replace />} />
        <Route path="validation" element={<ValiderCandidats />} />
        <Route path="inscriptions" element={<InscriptionsScolarite />} />
        <Route path="recherche" element={<RechercheScolarite />} />
        <Route path="documents" element={<DocumentsScolarite />} />
      </Route>

      {/* --- AUTRES --- */}
      <Route path="/coordinateur-dashboard" element={<ProtectedRoute role="Coordinateur"><CoordinateurDashboard /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}