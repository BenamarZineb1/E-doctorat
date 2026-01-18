import React from "react";
import { Link } from "react-router-dom";

function CardRole({ title, description, link, color }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: color,
          color: "#fff",
          padding: "20px",
          borderRadius: "12px",
          flex: "1 1 200px",
          transition: "0.3s",
          minWidth: "200px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ marginBottom: "10px", fontFamily: "'Roboto', sans-serif" }}>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CardRole;
