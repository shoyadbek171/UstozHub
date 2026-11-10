/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',    // Primary Brand (Indigo)[cite: 2]
        darkInk: '#0F172A',    // Text / Dark Ink[cite: 2]
        accentTeal: '#14B8A6', // Accent Teal[cite: 2]
        appBg: '#F8FAFC',      // App Background[cite: 2]
        status: {
          success: '#16A34A',  // Active[cite: 2]
          warning: '#F59E0B',  // Pending[cite: 2]
          danger: '#EF4444',   // Rejected[cite: 2]
          info: '#0284C7',     // Draft[cite: 2]
        }
      }
    },
  },
  plugins: [],
}
