/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: '#004d40',
                primaryHover: '#003d33',
                bgLight: '#f9fbfb',
                footerBg: '#122620',
                accent: '#10b981'
            }
        },
    },
    plugins: [],
}
