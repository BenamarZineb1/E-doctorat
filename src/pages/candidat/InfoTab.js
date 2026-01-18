// --------------------------- InfoTab.js ---------------------------
import React, { useState } from "react";
import LayoutCandidat, { commonStyles } from "./LayoutCandidat";
import { useAuth } from "../../contexts/AuthContext";
import { FaSave, FaCamera, FaLock } from "react-icons/fa";

export default function InfoTab() {
  const { user, setUser } = useAuth();

  // Champs modifiables
  const [formData, setFormData] = useState({
    nomAr: user?.nomAr || "بنمار",
    prenomAr: user?.prenomAr || "زينب",
    cin: user?.cin || "CD123456",
    dateNaissance: user?.dateNaissance || "1998-07-15",
    lieuNaissance: user?.lieuNaissance || "Fès",
    lieuNaissanceAr: user?.lieuNaissanceAr || "فاس",
    telephone: user?.telephone || "0612345678",
    adresse: user?.adresse || "12 Rue des Fleurs, Fès",
    sexe: user?.sexe || "Féminin",
  });

  const [photoPreview, setPhotoPreview] = useState(user?.photo || null);

  // Changement des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Changement de la photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024) return alert("La photo ne doit pas dépasser 1 Mo.");
    setPhotoPreview(URL.createObjectURL(file));
  };

  // Sauvegarde
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...formData, photo: photoPreview });
    alert("Informations personnelles enregistrées !");
  };

  return (
    <LayoutCandidat>
      <div style={commonStyles.card}>
        <h2 style={commonStyles.title}>Informations Personnelles</h2>
        <form onSubmit={handleSubmit}>
          {/* PHOTO */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
            <div style={{ position: "relative", width: "120px", height: "120px" }}>
              <div style={{
                width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
                border: "3px solid #003366", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {photoPreview ? (
                  <img src={photoPreview} alt="Profil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span style={{ fontSize: "30px", color: "#ccc" }}>Photo</span>
                )}
              </div>
              <label style={{
                position: "absolute", bottom: "0", right: "0", background: "#8B1E3F", color: "#fff",
                width: "35px", height: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", border: "2px solid #fff", boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
              }}>
                <FaCamera size={16} />
                <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: "none" }} />
              </label>
            </div>
            <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Cliquez pour modifier la photo</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {/* CHAMPS VERROUILLÉS */}
            <InputGroup label="Nom" value={user?.nom || "Zineb"} locked />
            <InputGroup label="Prénom" value={user?.prenom || "Benamar"} locked />
            <InputGroup label="Email" value={user?.email || "zineb@gmail.com"} locked />
            <InputGroup label="CNE / Code Massar" value={user?.cne || "D13000"} locked />

            <div style={{ gridColumn: "span 2", height: "1px", background: "#eee", margin: "10px 0" }} />

            {/* CHAMPS MODIFIABLES */}
            <InputGroup label="CIN" name="cin" value={formData.cin} onChange={handleChange} />
            <InputGroup label="Date de naissance" type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
            <InputGroup label="Nom en Arabe" name="nomAr" value={formData.nomAr} onChange={handleChange} isRtl placeholder="النسب" />
            <InputGroup label="Prénom en Arabe" name="prenomAr" value={formData.prenomAr} onChange={handleChange} isRtl placeholder="الاسم" />
            <InputGroup label="Lieu naissance (Fr)" name="lieuNaissance" value={formData.lieuNaissance} onChange={handleChange} />
            <InputGroup label="Lieu naissance (Ar)" name="lieuNaissanceAr" value={formData.lieuNaissanceAr} onChange={handleChange} isRtl />
            <InputGroup label="Téléphone" name="telephone" value={formData.telephone} onChange={handleChange} />
            <div>
              <label style={commonStyles.label}>Sexe</label>
              <select name="sexe" value={formData.sexe} onChange={handleChange} style={commonStyles.input}>
                <option value="Masculin">Masculin</option>
                <option value="Féminin">Féminin</option>
              </select>
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <label style={commonStyles.label}>Adresse</label>
              <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} style={commonStyles.input} placeholder="N° Rue, Quartier, Ville..." />
            </div>
          </div>

          <div style={{ marginTop: "30px", textAlign: "right", borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <button type="submit" style={commonStyles.btnSuccess}><FaSave style={{ marginRight: "8px" }} /> Enregistrer</button>
          </div>
        </form>
      </div>
    </LayoutCandidat>
  );
}

// --- Composant InputGroup ---
const InputGroup = ({ label, value, name, onChange, locked = false, isRtl = false, type = "text", placeholder = "" }) => (
  <div>
    <label style={commonStyles.label}>
      {label} {locked && <FaLock size={10} color="#999" style={{ marginLeft: "5px" }} />}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={locked ? undefined : onChange}
      readOnly={locked}
      disabled={locked}
      dir={isRtl ? "rtl" : "ltr"}
      placeholder={placeholder}
      style={{
        ...commonStyles.input,
        backgroundColor: locked ? "#e9ecef" : "#fff",
        cursor: locked ? "not-allowed" : "text",
        color: locked ? "#6c757d" : "#000",
        borderColor: locked ? "#ced4da" : "#ccc",
      }}
    />
  </div>
);
