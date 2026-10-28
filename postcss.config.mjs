// Tailwind 3 dijalankan langsung via PostCSS (Vite) — @astrojs/tailwind tidak mendukung Astro 7.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
