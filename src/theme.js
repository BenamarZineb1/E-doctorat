// src/theme.js
export const theme = {
  colors: {
    primary: "#003366", // USMBA Deep Blue
    primaryHover: "#004080",
    secondary: "#8B1E3F", // USMBA Maroon
    secondaryHover: "#a02449",
    accent: "#D4AF37", // Academic Gold
    background: "#F8FAFC", // Cool White
    surface: "#FFFFFF",
    text: "#1E293B", // Slate 800
    textMuted: "#64748B", // Slate 500
    white: "#FFFFFF",
    border: "#E2E8F0",
  },

  fonts: {
    main: "'Inter', 'Segoe UI', Roboto, sans-serif",
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },

  transitions: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
