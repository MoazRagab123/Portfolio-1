// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          // Custom spin animation with adjusted speed (2s for one rotation)
          'spin-slow': 'spin 3s linear infinite',
          'spin-fast': 'spin 0.5s linear infinite',
        },
      },
    },
  }
  