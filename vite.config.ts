import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import vitePluginZipDist from "vite-plugin-dist-zip";
const manifest = require('./public/manifest.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginZipDist({zipName: `${manifest.name}-${manifest.version}`}),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    rollupOptions: {
      input: ["index.html", "contentScript/contentScript.ts", "inject/inject.ts", "src/main.tsx"],
      output: {
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
        entryFileNames: "[name].js",
        dir: "dist",
      }
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // '@btn-height-default': '40px', // 自定义TDesign主题 https://tdesign.tencent.com/react/getting-started
        },
      },
    },
  },
})
