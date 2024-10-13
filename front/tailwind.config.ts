import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      jet: "#2e2f2f",
      whitesmoke: "#f5f5f5",
      coral: "#fe6e6f",
      bg: "#0E6639",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
