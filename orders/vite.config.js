import {federation} from "@module-federation/vite"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"orders",
      dts: false,
      filename:"remoteEntry.js",
      exposes:{
        "./Orders":"./src/app.jsx"
      },
      shared:{
        react:{
          singletone:true
        },
        "react-dom":{
          singletone:true
        }
      }
    })
  ],
  server:{
    port:5003
  },
  build:{
    target:"chrome89"
  }
})
