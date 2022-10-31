module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                backdrop: "#121212",
                primary: "#1db954",
                active: "#282828",
                link: "#b3b3b3",
                footer: "#181818"
            },
            fontsize: {
                s: "0.813rem"
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}

