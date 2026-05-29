export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error-container": "#ffdad6",
                        "primary": "#2b4f1d",
                        "secondary-fixed-dim": "#a7d295",
                        "on-tertiary-fixed": "#231b00",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "primary-container": "#426732",
                        "on-secondary-fixed-variant": "#2a4f1f",
                        "secondary": "#416835",
                        "surface-tint": "#436833",
                        "surface-dim": "#dadad5",
                        "on-tertiary-fixed-variant": "#564500",
                        "tertiary-container": "#cba81b",
                        "on-surface-variant": "#43493e",
                        "on-surface": "#1a1c19",
                        "tertiary": "#725c00",
                        "on-secondary-fixed": "#022100",
                        "primary-fixed-dim": "#a8d292",
                        "tertiary-fixed-dim": "#e8c339",
                        "inverse-surface": "#2f312e",
                        "on-primary": "#ffffff",
                        "outline-variant": "#c3c9bb",
                        "on-error": "#ffffff",
                        "outline": "#73796d",
                        "secondary-fixed": "#c2efaf",
                        "error": "#ba1a1a",
                        "tertiary-fixed": "#ffe07d",
                        "on-primary-fixed-variant": "#2c4f1d",
                        "surface-container-high": "#e8e8e3",
                        "surface-container-low": "#f4f4ee",
                        "on-tertiary-container": "#4d3e00",
                        "surface-bright": "#fafaf4",
                        "surface-container": "#eeeee9",
                        "primary-fixed": "#c3efac",
                        "on-secondary-container": "#466c39",
                        "background": "#fafaf4",
                        "surface-variant": "#e3e3de",
                        "inverse-on-surface": "#f1f1ec",
                        "on-primary-fixed": "#052100",
                        "surface-container-highest": "#e3e3de",
                        "on-error-container": "#93000a",
                        "inverse-primary": "#a8d292",
                        "on-secondary": "#ffffff",
                        "on-primary-container": "#b8e4a2",
                        "secondary-container": "#bfecac",
                        "on-background": "#1a1c19",
                        "surface": "#fafaf4"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "lg": "40px",
                        "xl": "64px",
                        "base": "4px",
                        "xs": "8px",
                        "sm": "16px",
                        "md": "24px",
                        "max-width": "1200px",
                        "margin-mobile": "16px",
                        "margin-desktop": "auto",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "headline-lg-mobile": ["Source Serif 4"],
                        "title-lg": ["Plus Jakarta Sans"],
                        "label-md": ["Plus Jakarta Sans"],
                        "headline-md": ["Source Serif 4"],
                        "body-md": ["Plus Jakarta Sans"],
                        "label-sm": ["Plus Jakarta Sans"],
                        "headline-lg": ["Source Serif 4"],
                        "body-lg": ["Plus Jakarta Sans"],
                        "display-lg": ["Source Serif 4"]
                    },
                    "fontSize": {
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "title-lg": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "display-lg": ["56px", {"lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    },
                    "animation": {
                        "float": "float 6s ease-in-out infinite",
                        "shimmer": "shimmer 8s linear infinite"
                    },
                    "keyframes": {
                        "float": {
                            "0%, 100%": { transform: "translateY(0)" },
                            "50%": { transform: "translateY(-10px)" }
                        },
                        "shimmer": {
                            "0%": { backgroundPosition: "200% center" },
                            "100%": { backgroundPosition: "-200% center" }
                        }
                    }
                }
            }
        };