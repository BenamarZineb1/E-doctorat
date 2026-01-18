import React, { useState } from "react";
import LayoutCandidat, { commonStyles } from "./LayoutCandidat";
import { FaTrash, FaPlusCircle, FaCheckCircle, FaFilePdf, FaSave } from "react-icons/fa";

export default function ParcoursTab() {
  // --- 1. State Initial : Le Bac est toujours là par défaut ---
  const [etapes, setEtapes] = useState([
    {
      id: 1,
      type: "BACCALAUREAT",
      niveau: 0,
      intitule: "Baccalauréat",
      annee: "",
      etablissement: "",
      ville: "",
      province: "", // Spécifique Bac
      moyenne: "",
      mention: "Passable",
      fichier: null,
      valide: false, // Si l'utilisateur a cliqué sur "Enregistrer" cette étape
    },
  ]);

  // État pour le type de diplôme que l'utilisateur veut ajouter
  const [nextType, setNextType] = useState("");

  // --- 2. Logique des Suites Possibles ---
  const getNextOptions = (lastType) => {
    switch (lastType) {
      case "BACCALAUREAT":
        return [
          { value: "BAC+2", label: "Bac +2 (DEUG, DUT, BTS, CPGE)" },
          { value: "LICENCE", label: "Licence (Fondamentale / Pro)" }, // Pour ceux qui font Bac -> Licence direct
        ];
      case "BAC+2":
        return [
          { value: "LICENCE", label: "Licence (Fondamentale / Pro)" },
          { value: "CYCLE_INGENIEUR", label: "Cycle Ingénieur" },
        ];
      case "LICENCE":
        return [
          { value: "MASTER", label: "Master / Master Spécialisé" },
          { value: "CYCLE_INGENIEUR", label: "Cycle Ingénieur (Accès via Passerelle)" },
        ];
      case "MASTER":
      case "CYCLE_INGENIEUR":
        return []; // Fin du parcours
      default:
        return [];
    }
  };

  // --- 3. Gestionnaires d'événements ---

  // Mettre à jour les champs d'une étape spécifique
  const handleChange = (id, field, value) => {
    const newEtapes = etapes.map((etape) =>
      etape.id === id ? { ...etape, [field]: value } : etape
    );
    setEtapes(newEtapes);
  };

  // Ajouter une nouvelle étape
  const handleAddStep = () => {
    if (!nextType) return;

    const newId = etapes.length + 1;
    let newStep = {
      id: newId,
      type: nextType,
      intitule: nextType === "CYCLE_INGENIEUR" ? "Cycle d'Ingénieur" : "",
      annee: "",
      etablissement: "",
      ville: "",
      specialite: "", // Filière
      moyenne: "",
      mention: "Passable",
      fichier: null,
      valide: false,
    };

    setEtapes([...etapes, newStep]);
    setNextType(""); // Reset selection
  };

  // Supprimer la dernière étape (sauf Bac)
  const handleDeleteLast = () => {
    if (etapes.length > 1) {
      const newEtapes = [...etapes];
      newEtapes.pop();
      setEtapes(newEtapes);
    }
  };

  // Valider une étape (Simule l'enregistrement)
  const handleSaveStep = (id) => {
    // Ici vous ajouteriez la validation des champs obligatoires
    const newEtapes = etapes.map((etape) =>
      etape.id === id ? { ...etape, valide: true } : etape
    );
    setEtapes(newEtapes);
  };

  // Vérifier si le parcours est complet pour le Doctorat
  const isParcoursComplet = () => {
    const last = etapes[etapes.length - 1];
    return (last.type === "MASTER" || last.type === "CYCLE_INGENIEUR") && last.valide;
  };

  // --- 4. Rendu de l'interface ---
  const lastEtape = etapes[etapes.length - 1];
  const optionsSuivantes = getNextOptions(lastEtape.type);

  return (
    <LayoutCandidat>
      {/* BANNIÈRE D'ÉTAT */}
      <div style={{ marginBottom: "20px" }}>
        {isParcoursComplet() ? (
          <div style={{ ...commonStyles.alertWarning, backgroundColor: "#d4edda", color: "#155724", borderColor: "#c3e6cb" }}>
            <FaCheckCircle style={{ marginRight: "10px" }} />
            <strong>Parcours Validé :</strong> Vous avez atteint le niveau requis (Master ou Ingénieur) pour postuler au Doctorat.
          </div>
        ) : (
          <div style={commonStyles.alertWarning}>
            <strong>Dossier en cours :</strong> Veuillez compléter votre parcours étape par étape jusqu'au Master ou Cycle d'Ingénieur.
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* BOUCLE SUR LES ÉTAPES */}
        {etapes.map((etape, index) => (
          <div key={etape.id} style={{ ...commonStyles.card, borderLeft: etape.valide ? "5px solid #28a745" : "5px solid #003366", position: "relative" }}>

            {/* Titre de l'étape */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              <h3 style={{ margin: 0, color: "#003366" }}>
                {index + 1}. {etape.type === "BACCALAUREAT" ? "BACCALAURÉAT" : etape.type.replace("_", " ")}
              </h3>
              {etape.valide && <span style={{ color: "#28a745", fontWeight: "bold", fontSize: "14px" }}><FaCheckCircle /> Enregistré</span>}
            </div>

            {/* Formulaire */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

              {/* CHAMPS SPÉCIFIQUES AU BAC */}
              {etape.type === "BACCALAUREAT" && (
                <>
                  <div><label style={commonStyles.label}>Série / Filière du Bac</label><input disabled={etape.valide} type="text" placeholder="Ex: Sciences Physiques" style={commonStyles.input} value={etape.specialite} onChange={(e) => handleChange(etape.id, "specialite", e.target.value)} /></div>
                  <div><label style={commonStyles.label}>Province d'obtention</label><input disabled={etape.valide} type="text" placeholder="Ex: Fès" style={commonStyles.input} value={etape.province} onChange={(e) => handleChange(etape.id, "province", e.target.value)} /></div>
                  <div><label style={commonStyles.label}>Année d'obtention</label><input disabled={etape.valide} type="number" style={commonStyles.input} value={etape.annee} onChange={(e) => handleChange(etape.id, "annee", e.target.value)} /></div>
                  <div><label style={commonStyles.label}>Moyenne Générale</label><input disabled={etape.valide} type="number" step="0.01" style={commonStyles.input} value={etape.moyenne} onChange={(e) => handleChange(etape.id, "moyenne", e.target.value)} /></div>
                </>
              )}

              {/* CHAMPS POUR LES AUTRES DIPLÔMES (BAC+2, LICENCE, MASTER, ING) */}
              {etape.type !== "BACCALAUREAT" && (
                <>
                  <div><label style={commonStyles.label}>Intitulé du Diplôme</label><input disabled={etape.valide} type="text" placeholder={etape.type === "CYCLE_INGENIEUR" ? "Génie Logiciel..." : "Ex: DUT Informatique..."} style={commonStyles.input} value={etape.intitule} onChange={(e) => handleChange(etape.id, "intitule", e.target.value)} /></div>
                  <div><label style={commonStyles.label}>Spécialité / Filière</label><input disabled={etape.valide} type="text" style={commonStyles.input} value={etape.specialite} onChange={(e) => handleChange(etape.id, "specialite", e.target.value)} /></div>
                  <div><label style={commonStyles.label}>Année d'obtention</label><input disabled={etape.valide} type="number" style={commonStyles.input} value={etape.annee} onChange={(e) => handleChange(etape.id, "annee", e.target.value)} /></div>
                  <div><label style={commonStyles.label}>Etablissement</label><input disabled={etape.valide} type="text" style={commonStyles.input} value={etape.etablissement} onChange={(e) => handleChange(etape.id, "etablissement", e.target.value)} /></div>
                </>
              )}

              {/* CHAMPS COMMUNS */}
              {etape.type !== "BACCALAUREAT" && (
                 <div><label style={commonStyles.label}>Moyenne / Note de sortie</label><input disabled={etape.valide} type="number" step="0.01" style={commonStyles.input} value={etape.moyenne} onChange={(e) => handleChange(etape.id, "moyenne", e.target.value)} /></div>
              )}
               <div>
                <label style={commonStyles.label}>Mention</label>
                <select disabled={etape.valide} style={commonStyles.input} value={etape.mention} onChange={(e) => handleChange(etape.id, "mention", e.target.value)}>
                  <option>Passable</option>
                  <option>Assez Bien</option>
                  <option>Bien</option>
                  <option>Très Bien</option>
                  <option>Excellent</option>
                </select>
              </div>
            </div>

            {/* Upload Fichiers */}
            <div style={{ marginTop: "15px", background: "#f9f9f9", padding: "15px", borderRadius: "6px", display: "flex", gap: "20px" }}>
               <div style={{ flex: 1 }}>
                 <label style={commonStyles.label}><FaFilePdf /> Diplôme Scanné (PDF &lt; 4Mo)</label>
                 <input disabled={etape.valide} type="file" accept=".pdf" style={{ width: "100%" }} />
               </div>
               <div style={{ flex: 1 }}>
                 <label style={commonStyles.label}><FaFilePdf /> Relevés de notes (PDF &lt; 4Mo)</label>
                 <input disabled={etape.valide} type="file" accept=".pdf" style={{ width: "100%" }} />
               </div>
            </div>

            {/* Boutons d'action pour cette étape */}
            {!etape.valide && (
              <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                 {/* On ne peut supprimer que la dernière étape et si ce n'est pas le bac */}
                 {index === etapes.length - 1 && etape.type !== "BACCALAUREAT" && (
                   <button onClick={handleDeleteLast} style={commonStyles.btnDanger}><FaTrash /> Supprimer</button>
                 )}
                 <button onClick={() => handleSaveStep(etape.id)} style={commonStyles.btnSuccess}><FaSave /> Enregistrer ce diplôme</button>
              </div>
            )}

            {etape.valide && index === etapes.length - 1 && !isParcoursComplet() && (
               <div style={{ textAlign: "right", marginTop: "10px", color: "#666", fontStyle: "italic" }}>
                 Diplôme enregistré. Veuillez ajouter la suite de votre parcours ci-dessous.
               </div>
            )}
          </div>
        ))}

        {/* --- ZONE D'AJOUT D'ÉTAPE --- */}
        {!isParcoursComplet() && lastEtape.valide && optionsSuivantes.length > 0 && (
          <div style={{ ...commonStyles.card, border: "2px dashed #003366", backgroundColor: "transparent", textAlign: "center", padding: "40px" }}>
            <h4 style={{ color: "#003366", marginBottom: "15px" }}>Continuer votre parcours académique</h4>
            <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
              <select
                style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", minWidth: "250px" }}
                value={nextType}
                onChange={(e) => setNextType(e.target.value)}
              >
                <option value="">-- Sélectionner le diplôme suivant --</option>
                {optionsSuivantes.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <button
                onClick={handleAddStep}
                disabled={!nextType}
                style={{ ...commonStyles.btnPrimary, opacity: nextType ? 1 : 0.6 }}
              >
                <FaPlusCircle style={{ marginRight: "5px" }} /> Ajouter
              </button>
            </div>
          </div>
        )}

      </div>
    </LayoutCandidat>
  );
}