import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import configPwa from './pwa.config'
import { VitePWA } from 'vite-plugin-pwa'

const pwaOptiona = {
  mode: 'developement',
  base: '/',
  includeAssets: [
    'favicon.svg',
    'favicon.ico',
    'robots.txt',
    'apple-touch-icon.png',
  ],
  manifest: {
    name: 'WeatherApp',
    short_name: 'WeatherApp',
    theme_color: '#fff',
    background_color: '#fff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: 'vite.svg',
        type: 'image/svg+xml',
        sizes: "144x144"
      },
    ],
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
}
const pwaPlugin = VitePWA(pwaOptiona)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaPlugin],
})
