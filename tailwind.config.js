/** @type {import('tailwindcss').Config} */
    const defaultTheme = require('tailwindcss/defaultTheme');

    module.exports = {
      darkMode: ['class'],
      content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
      ],
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          fontFamily: {
            heading: ['Rowdies', ...defaultTheme.fontFamily.sans],
            body: ['MuseoModerno', ...defaultTheme.fontFamily.sans],
            accentText: ['Rubik Glitch', ...defaultTheme.fontFamily.sans],
            arabic: ['Cairo', 'MuseoModerno', ...defaultTheme.fontFamily.sans],
          },
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
            'brand-blue': '#2980B9',
            'brand-accent-grey': '#DFC9CA', 
            'brand-dark-grey': '#4A4A4A',
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
            'pulse-glow': {
              '0%, 100%': { boxShadow: '0 0 10px hsl(var(--primary))', opacity: '1' },
              '50%': { boxShadow: '0 0 25px hsl(var(--primary))', opacity: '0.7' },
            },
            'subtle-float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-8px)' },
            },
            'spin-slow': {
              'to': { transform: 'rotate(360deg)' },
            }
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
            'subtle-float': 'subtle-float 4s infinite ease-in-out',
            'spin-slow': 'spin-slow 25s linear infinite',
          },
        },
      },
      plugins: [require('tailwindcss-animate')],
    };