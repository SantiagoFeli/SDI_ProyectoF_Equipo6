/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {
  
        colors: {
          'white': '#F5F5F5'
        },
  
        fontFamily: {
          'Motley Forces': ['Motley Forces'],
        }
      },
    },
    plugins:[
      require('flowbite/plugin')
  ]
  }