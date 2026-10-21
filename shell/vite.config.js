import {federation} from "@module-federation/vite"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "shell",
      dts: false,
      remotes:{
        products:{
          type:"module",
          name:"products",
          entry:"http://localhost:5001/remoteEntry.js"
        },
        cart:{
          type:"module",
          name:"cart",
          entry:"http://localhost:5002/remoteEntry.js"
        },
        orders:{
          type:"module",
          name:"orders",
          entry:"http://localhost:5003/remoteEntry.js"
        }
      },
      shared:{
        react:{
          singletone: true,
        },
        "react-dom":{
          singletone: true
        }
      }
    })
  ],
  server:{
    port:3000
  },
  build:{
    target:"chrome89"
  }
})
