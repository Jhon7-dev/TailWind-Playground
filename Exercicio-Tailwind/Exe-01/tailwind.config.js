/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb",            // Azul principal
        "brand-strong": "#1d4ed8",   // Azul escuro
        "brand-medium": "#3b82f6",   // Azul claro (ring)
        heading: "#1f2937",          // Título
      },
      borderRadius: {
        base: "8px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.08)",
      }
    },
  },
  plugins: [],
};
