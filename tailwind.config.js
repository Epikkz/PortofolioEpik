import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            animation: {
                float: 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              },
            shaky: 'shaky 1.5 ease-in-out infinite',
            keyframes: {
                shaky: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '25%': { transform: 'translateY(-5px)' },
                  '50%': { transform: 'translateY(5px)' },
                  '75%': { transform: 'translateY(-3px)' },
                },
              },
                
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                // Default Tailwind breakpoints
                sm: '640px',  // Small screens (mobile)
                md: '768px',  // Medium screens (tablet)
                lg: '1024px', // Large screens (desktop)
                xl: '1280px', // Extra large screens
                '2xl': '1536px',

                // Custom breakpoints (optional)
                xs: '475px', // Extra small screens
                tablet: '768px', // Alias for tablet
                desktop: '1024px', // Alias for desktop
            },
        },
    },

    plugins: [forms],
};
