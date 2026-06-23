/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-container": "#e3efd8",
        "surface-container-low": "#f1f3e9",
        "tertiary-fixed": "#f6e9a9",
        "on-background": "#1d2a20",
        "error": "#ba1a1a",
        "primary-container": "#3f6f3a",
        "tertiary": "#856600",
        "on-surface": "#1d2a20",
        "inverse-on-surface": "#f3f0ed",
        "tertiary-container": "#8d4b00",
        "surface-variant": "#e5e2df",
        "inverse-primary": "#86d4d2",
        "surface-bright": "#fbfaf4",
        "surface-tint": "#285c32",
        "on-secondary-fixed": "#001f2a",
        "on-secondary-container": "#214c2c",
        "inverse-surface": "#31302f",
        "on-primary-fixed": "#00201f",
        "on-tertiary": "#ffffff",
        "outline-variant": "#d4d9ce",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "on-primary-container": "#e5f3dc",
        "primary": "#285c32",
        "error-container": "#ffdad6",
        "secondary": "#647064",
        "secondary-fixed": "#e3efd8",
        "on-surface-variant": "#596358",
        "on-tertiary-fixed": "#2f1500",
        "surface-container-highest": "#e6e9df",
        "outline": "#747d70",
        "surface-container-high": "#eceee6",
        "surface": "#fbfaf4",
        "primary-fixed": "#d9edcf",
        "surface-container": "#eff1e9",
        "background": "#fbfaf4",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "secondary-fixed-dim": "#c5ddb9",
        "on-secondary-fixed-variant": "#315a35",
        "surface-dim": "#dddfd7",
        "primary-fixed-dim": "#b8d9aa",
        "tertiary-fixed-dim": "#e8c437",
        "on-tertiary-container": "#ffcba3",
        "on-tertiary-fixed-variant": "#6e3900",
        "on-primary-fixed-variant": "#285c32"
      },
      fontFamily: {
        "headline": ["Source Serif 4", "Georgia", "serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.625rem",
        "xl": "0.875rem",
        "full": "9999px"
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
