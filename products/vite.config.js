import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"products",
      dts:false,
      filename: "remoteEntry.js",
      exposes:{
        "./Products": "./src/App.jsx"
      },
      shared:{
        react: {
          singletone:true,
        },
        "react-dome":{
          singleton:true
        }

      }
    })
  ],
  server:{
    port:5001
  },
  build:{
    target: "chrome89"
  }
})
