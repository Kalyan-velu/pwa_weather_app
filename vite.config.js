import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import configPwa from './pwa.config'
import { VitePWA } from 'vite-plugin-pwa'

const pwaPlugin = VitePWA({
  config: {
    name: 'WeatherApp', // The name of your app
    short_name: 'WeatherApp', // The short name of your app
    theme_color: '#fff', // The theme color of your app
    background_color: '#fff', // The background color of your app
    display: 'standalone', // The display mode of your app
    scope: '/', // The scope of your app
    start_url: '/', // The start URL of your app
    icons: [
      {
        src: './icon.png', // The path to your app icon
        sizes: [96, 128, 192, 256, 384, 512], // The sizes of your app icon
      },
    ],
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaPlugin],
})
