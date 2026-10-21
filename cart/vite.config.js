import {federation} from "@module-federation/vite"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"cart",
      dts:false,
      finelname:"remoteEntry.js",
      exposes:{
        "./Cart":"./src/app.jsx"
      },
      shared:{
        react:{
          singletone: true
        },
        "react-dom":{
          singletone: true
        }
      }
    })
  ],
  server:{
    port: 5002
  },
  build:{
    target:"chrome89"
  }
})
