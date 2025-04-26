/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000',
          secondary: '#0A0A0A'
        },
        primary: {
          DEFAULT: '#FFFFFF',
          hover: '#E5E5E5'
        },
        accent: {
          DEFAULT: '#2E6FF3',
          blue: {
            DEFAULT: '#2E6FF3',
            hover: '#4B83FF'
          },
          yellow: {
            DEFAULT: '#FFB547',
            hover: '#FFCA7A'
          },
          cyan: '#2CCED9',
          secondary: '#7B5CFA'
        },
        success: {
          DEFAULT: '#22C55E',
          light: '#86EFAC'
        },
        warning: {
          DEFAULT: '#FFB547',
          light: '#FFCA7A'
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FCA5A5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
  safelist: [
    'bg-accent',
    'bg-accent-blue',
    'bg-accent-yellow',
    'bg-accent-cyan',
    'bg-accent-secondary',
    'bg-success',
    'bg-warning',
    'bg-error',
    'text-accent',
    'text-accent-blue',
    'text-accent-yellow',
    'text-accent-cyan',
    'text-accent-secondary',
    'text-success',
    'text-warning',
    'text-error',
    'border-l-warning',
    'border-l-success',
    'border-l-accent-blue',
    'border-accent',
    'border-accent-blue',
    'border-accent-yellow',
    'border-accent-cyan',
    'border-accent-secondary',
    'border-success',
    'border-warning',
    'border-error',
    {
      pattern: /bg-(accent|accent-blue|accent-yellow|accent-cyan|accent-secondary|success|warning|error)\/\d+/,
      variants: ['hover']
    },
    {
      pattern: /text-(accent|accent-blue|accent-yellow|accent-cyan|accent-secondary|success|warning|error)\/\d+/,
      variants: ['hover']
    },
    {
      pattern: /border-(accent|accent-blue|accent-yellow|accent-cyan|accent-secondary|success|warning|error)\/\d+/,
      variants: ['hover']
    }
  ]
};