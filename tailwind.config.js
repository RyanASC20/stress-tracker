const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", "sans-serif"],
                heading: ["Raleway", "sans-serif"],
            },
            transitionDuration: {
                '4000': '4000ms',
                '7000': '7000ms',
                '8000': '8000ms',
            },
            colors: {
                base: {
                    DEFAULT: "#FAF9FA",
                },
                card: {
                    DEFAULT: "#ededed",
                    secondary: "#86E3CE"
                },
                highlight: {
                    DEFAULT: "#55D681",
                    pink: "#F87171"
                },
                navbar: {
                    DEFAULT: "#535467"
                },
                emote: {
                    0: "#3692e3",
                    1: "#F15B5B",
                    2: "#ff8105",
                    3: "#F1AC5B",
                    4: "#c3ba0c",
                    5: "#87bd10",
                    6: "#4D844B"
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
