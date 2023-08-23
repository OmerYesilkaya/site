/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                default: "Maven Pro, sans-serif",
            },
            backgroundImage: {
                noise: "url('/noise.png')",
            },
        },
    },
    plugins: [],
};
