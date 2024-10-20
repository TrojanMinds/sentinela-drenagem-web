import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        BG: "#0B1D26",
        Yellow:"#FBD784",
        Blue: "#7EE3FC",
        ButtonBlue: "#1B7CEB"
      }
    },
  },
  plugins: [],
} satisfies Config;
