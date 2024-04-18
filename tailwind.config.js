/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgLogin: "#10141E",
        bgLoginCard: "#161D2F",
        bgLoginBtn: "#FC4747",
        bgNavBar: "#161D2F",
        darkBlue: "#10141E",
      },
      width: {
        cardWidth: "327px",
        widthTablet: "400px",
      },
      colors: {
        borderBottom: "#5A698F",
      },
      height: {
        inputHeight: "37px",
      },
      opacity: {
        textOpacity: "65%",
        circleOpacity: "50%",
      },
    },
  },
  plugins: [],
};
