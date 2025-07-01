


tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        bg: '#0f172a',         // Dark navy background
        surface: '#1e293b',    // Card surfaces
        accent: '#10b981',     // Emerald green (primary accent)
        'accent-dark': '#059669', // Darker emerald
        secondary: '#3b82f6',  // Royal blue (secondary accent)
        text: '#ffffff',       // White text
        muted: '#94a3b8',      // Muted text
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }

    }
  }
}





