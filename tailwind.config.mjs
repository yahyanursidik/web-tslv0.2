/** Design tokens mengikuti brief revamp TSL (bagian 8.1). */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#173D2B',
        deep: '#245B3D',
        sage: '#62816E',
        cream: '#F7F7F1',
        gold: '#C79332',
        ink: '#203129',
        // Sedikit lebih gelap dari #65766C agar lolos kontras AA (≥4.5:1) di atas cream.
        muted: '#5E6E65',
        mist: '#EAF1E9',
        line: '#E2E8E0',
        night: '#102E20',
        sand: '#F3EEE3',
        // Warna dari logo resmi TSL
        brand: {
          DEFAULT: '#466835',
          dark: '#2C5122',
          orange: '#F5821F',
          yellow: '#E6C33B',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(20,48,30,.10)',
        lift: '0 10px 30px rgba(20,48,30,.08)',
      },
    },
  },
};
