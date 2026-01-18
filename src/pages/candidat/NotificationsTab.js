import React from "react";
import LayoutCandidat, { commonStyles } from "./LayoutCandidat";

export default function NotificationsTab() {
  return (
    <LayoutCandidat>
      <div style={commonStyles.card}>
        <h2 style={commonStyles.title}>Notifications & Résultats</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* Notification 1 */}
          <div style={{ padding: "15px", borderLeft: "5px solid #28a745", background: "#f1f8f1", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
             <h4 style={{ margin: "0 0 5px 0", color: "#28a745" }}>Validation de Dossier</h4>
             <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
               Votre dossier (DUT + LICENCE + MASTER) a été validé par l'administration.
             </p>
             <span style={{ fontSize: "12px", color: "#999", display: "block", marginTop: "5px" }}>Il y a 2 heures</span>
          </div>

          {/* Notification 2 */}
          <div style={{ padding: "15px", borderLeft: "5px solid #003366", background: "#eef2f6", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
             <h4 style={{ margin: "0 0 5px 0", color: "#003366" }}>Ouverture des choix de sujets</h4>
             <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
               Vous pouvez désormais postuler aux sujets proposés par les laboratoires. Veuillez consulter l'onglet "Postuler".
             </p>
             <span style={{ fontSize: "12px", color: "#999", display: "block", marginTop: "5px" }}>Hier à 10:00</span>
          </div>

          {/* Notification 3 */}
          <div style={{ padding: "15px", borderLeft: "5px solid #8B1E3F", background: "#fff5f5", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
             <h4 style={{ margin: "0 0 5px 0", color: "#8B1E3F" }}>Rappel : Pièces manquantes</h4>
             <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
               Veuillez charger votre fiche de dépôt signée dans la section "Informations Personnelles" avant le 30 Octobre.
             </p>
             <span style={{ fontSize: "12px", color: "#999", display: "block", marginTop: "5px" }}>Il y a 3 jours</span>
          </div>
        </div>
      </div>
    </LayoutCandidat>
  );
}