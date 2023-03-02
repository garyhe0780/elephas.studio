import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      height: {
        header: "4rem",
      },
      colors: {
        blue: {
          50: "#DEE8F7",
          100: "#BDD0F0",
          200: "#769FE0",
          300: "#3470D0",
          400: "#204A8D",
          500: "#11274A",
          600: "#0D1E3A",
          700: "#0A182E",
          800: "#070F1D",
          900: "#040911",
        },
      },
    },
  },
} as Options;
