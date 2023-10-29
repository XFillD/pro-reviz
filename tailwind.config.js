/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBlue: "#007396",
                mainRed: "#EF3340",
                mainYellow: "#E4E231",
            },
            backgroundImage: {
                "hero-img": "url('/hero.webp')",
            },
        },
    },
    plugins: [],
};
