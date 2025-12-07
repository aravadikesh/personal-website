/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        void: {
          DEFAULT: '#030303',
          50: '#1a1a1a',
          100: '#121212',
          200: '#0d0d0d',
          300: '#0a0a0a',
          400: '#080808',
          500: '#050505',
          600: '#030303',
          700: '#020202',
          800: '#010101',
          900: '#000000',
        },
        cyan: {
          DEFAULT: '#00f0ff',
          electric: '#00f0ff',
          glow: 'rgba(0, 240, 255, 0.5)',
        },
        terminal: {
          green: '#00ff41',
          amber: '#ffb000',
          red: '#ff0040',
          dim: '#4a4a4a',
        }
      },
      animation: {
        // Keep useful universal animations
        fadeIn: "fadeIn 1.5s ease-in-out",
        fadeInFast: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",

        // New terminal-specific animations
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      animationDelay: {
        0: "0s",
        100: "0.1s",
        200: "0.2s",
        300: "0.3s",
        400: "0.4s",
        500: "0.5s",
        600: "0.6s",
        700: "0.7s",
        800: "0.8s",
        1000: "1s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.6))'
          },
          '50%': {
            opacity: '0.8',
            filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.9))'
          },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.98' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 240, 255, 0.3)',
        'cyan-glow-lg': '0 0 40px rgba(0, 240, 255, 0.5)',
        'terminal': 'inset 0 0 60px rgba(0, 240, 255, 0.05)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 8px 32px 0 rgba(0, 240, 255, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
        'terminal': '12px',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"3\" numOctaves=\"3\" /%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
