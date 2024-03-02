import { light,dark } from "daisyui/src/theming/themes";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography, daisyui
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...light,
          primary: "#efce03",
          secondary: "#000000",
        },
        dark: {
          ...dark,
          primary: "#efce03",
          secondary: "#ffffff",
        },
      },
    ],
  },
}