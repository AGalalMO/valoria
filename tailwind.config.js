/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                trajan: ["TrajanPro", "sans-serif"]
            },
            keyframes: {
                'toast-in': {
                    '0%': { opacity: 0, transform: 'translateY(12px) scale(0.98)' },
                    '100%': { opacity: 1, transform: 'translateY(0) scale(1)' }
                },
                'toast-out': {
                    '0%': { opacity: 1, transform: 'translateY(0) scale(1)' },
                    '100%': { opacity: 0, transform: 'translateY(8px) scale(0.98)' }
                },
            },
            animation: {
                'toast-in': 'toast-in 200ms ease-out forwards',
                'toast-out': 'toast-out 150ms ease-in forwards',
            },
        }
    },
    plugins: []
}
