/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  fontWeight: {
    hairline: 100,
    thin: 200,
    paperthin: 275,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  extend: {
    fontFamily: {
      sans: ["Montserrat", ..._fontFamily.sans],
    },
    colors: {
      payrole: {
        black: "#0A112F",
        lightBlack: "#15191E",
        gray: "#9096A2",
        gray100: "#F4F4F5",
        lightGrey: "#FAFAFA",
        darkGray: "#70707A",
        primary: "#3981F7",
        borderColor: "#E4E4E7",
        green: "#0AAF60",
        lightGreen: "#CEEFDF",
      },
    },
  },
};
export const plugins = [];
