import { useEffect } from "react";

function HeroLogo() {
  useEffect(() => {
    const parts = document.querySelectorAll(".part");

    const fonts = [
      "Courier New, Courier, monospace",
      "Noticia Text, serif",
      "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
      "Anton, sans-serif",
      "Times New Roman, Times, serif",
      "Abril Fatface, cursive",
      "Arial, Helvetica, sans-serif",
      "Shrikhand, cursive",
      "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
      "Open Sans Condensed, sans-serif",
      "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
      "Montserrat, Arial, Helvetica, sans-serif",
      "Rubik, Arial, Helvetica, sans-serif",
    ];

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function changeFont() {
      parts.forEach((part) => {
        const randomIndex = getRandomInt(fonts.length);
        part.style.fontFamily = fonts[randomIndex];
      });
    }

    const intervalId = setInterval(changeFont, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      parts.forEach((part) => {
        part.style.fontFamily = "Rubik, Arial, Helvetica, sans-serif";
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p id="logo">
      <span className="part">Sara</span>
      <span id="dot">.</span>
      <span className="part">cb</span>
    </p>
  );
}

export default HeroLogo;
