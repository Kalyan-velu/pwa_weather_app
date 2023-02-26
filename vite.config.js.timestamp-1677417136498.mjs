// vite.config.js
import { defineConfig } from "file:///D:/Users/Kalyan/Project/React%20JSX/pwa_weather_app/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Users/Kalyan/Project/React%20JSX/pwa_weather_app/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/Users/Kalyan/Project/React%20JSX/pwa_weather_app/node_modules/vite-plugin-pwa/dist/index.mjs";
var pwaPlugin = VitePWA({
  config: {
    name: "WeatherApp",
    // The name of your app
    short_name: "WeatherApp",
    // The short name of your app
    theme_color: "#fff",
    // The theme color of your app
    background_color: "#fff",
    // The background color of your app
    display: "standalone",
    // The display mode of your app
    scope: "/",
    // The scope of your app
    start_url: "/",
    // The start URL of your app
    icons: [
      {
        src: "./vite.png",
        // The path to your app icon
        sizes: [96, 128, 192, 256, 384, 512]
        // The sizes of your app icon
      }
    ]
  }
});
var vite_config_default = defineConfig({
  plugins: [react(), pwaPlugin]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxLYWx5YW5cXFxcUHJvamVjdFxcXFxSZWFjdCBKU1hcXFxccHdhX3dlYXRoZXJfYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxLYWx5YW5cXFxcUHJvamVjdFxcXFxSZWFjdCBKU1hcXFxccHdhX3dlYXRoZXJfYXBwXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Vc2Vycy9LYWx5YW4vUHJvamVjdC9SZWFjdCUyMEpTWC9wd2Ffd2VhdGhlcl9hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuLy8gaW1wb3J0IGNvbmZpZ1B3YSBmcm9tICcuL3B3YS5jb25maWcnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuXG5jb25zdCBwd2FQbHVnaW4gPSBWaXRlUFdBKHtcbiAgY29uZmlnOiB7XG4gICAgbmFtZTogJ1dlYXRoZXJBcHAnLCAvLyBUaGUgbmFtZSBvZiB5b3VyIGFwcFxuICAgIHNob3J0X25hbWU6ICdXZWF0aGVyQXBwJywgLy8gVGhlIHNob3J0IG5hbWUgb2YgeW91ciBhcHBcbiAgICB0aGVtZV9jb2xvcjogJyNmZmYnLCAvLyBUaGUgdGhlbWUgY29sb3Igb2YgeW91ciBhcHBcbiAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZicsIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHlvdXIgYXBwXG4gICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLCAvLyBUaGUgZGlzcGxheSBtb2RlIG9mIHlvdXIgYXBwXG4gICAgc2NvcGU6ICcvJywgLy8gVGhlIHNjb3BlIG9mIHlvdXIgYXBwXG4gICAgc3RhcnRfdXJsOiAnLycsIC8vIFRoZSBzdGFydCBVUkwgb2YgeW91ciBhcHBcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICcuL3ZpdGUucG5nJywgLy8gVGhlIHBhdGggdG8geW91ciBhcHAgaWNvblxuICAgICAgICBzaXplczogWzk2LCAxMjgsIDE5MiwgMjU2LCAzODQsIDUxMl0sIC8vIFRoZSBzaXplcyBvZiB5b3VyIGFwcCBpY29uXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59KVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHB3YVBsdWdpbl0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixTQUFTLG9CQUFvQjtBQUNoWCxPQUFPLFdBQVc7QUFFbEIsU0FBUyxlQUFlO0FBRXhCLElBQU0sWUFBWSxRQUFRO0FBQUEsRUFDeEIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUE7QUFBQSxJQUNaLGFBQWE7QUFBQTtBQUFBLElBQ2Isa0JBQWtCO0FBQUE7QUFBQSxJQUNsQixTQUFTO0FBQUE7QUFBQSxJQUNULE9BQU87QUFBQTtBQUFBLElBQ1AsV0FBVztBQUFBO0FBQUEsSUFDWCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsS0FBSztBQUFBO0FBQUEsUUFDTCxPQUFPLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFBQTtBQUFBLE1BQ3JDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBR0QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTO0FBQzlCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
