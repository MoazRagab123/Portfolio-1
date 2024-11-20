// tailwind.config.js
tailwind.config = {
    theme: {
       
      extend: {
        animation: {
          // Custom spin animation with adjusted speed (2s for one rotation)
          spin_slow: 'spin 6s linear infinite',
          'spin-fast': 'spin 0.5s linear infinite',
        },
        gridTemplateColumns:{
            'auto': 'repeat(auto-fit,minmax(200px,1fr))'
        },
        fontFamily:{
         Outfit:["Outfit", "sans-serif"], 
         Ovo:["Ovo", "serif"],
        },
        colors:{
           lightHover : '#f5f2f6',
           darkHover  : '#2a004a',
           darkTheme  : '#11001F',
        },
        boxShadow:{
          'black': '4px 4px 0 #000',
          'white': '4px 4px 0 #fff',
        },
      },
    },
    darkMode: 'selector'
  }
  