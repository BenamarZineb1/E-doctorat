import React from "react";

function Notification({ message, type }) {
  let bgColor = "#0073e6"; // default info
  if (type === "success") bgColor = "#28a745";
  if (type === "warning") bgColor = "#ffc107";
  if (type === "error") bgColor = "#dc3545";

  return (
    <div
      style={{
        padding: "12px 20px",
        backgroundColor: bgColor,
        color: "#fff",
        borderRadius: "8px",
        minWidth: "200px",
        fontWeight: "600",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      {message}
    </div>
  );
}

export default Notification;
