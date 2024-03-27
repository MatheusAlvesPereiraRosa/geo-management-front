/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                card: '1px 7px 13px 3px rgba(46,29,0,1)'
            },
        },
    },
    plugins: [],
}
