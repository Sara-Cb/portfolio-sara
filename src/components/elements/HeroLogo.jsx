import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function HeroLogo() {
  const size = useSelector((state) => state.screen.size);
  const isMdScreen = size === "md";

  useEffect(() => {
    const parts = document.querySelectorAll(".hero .logo .part");

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
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Row className="sectionContainer hero">
      <Col xs={12}>
        <Row className="mb-4">
          <Col>
            <p className="logo text-center text-sm-start">
              <span className="part">Sara</span>
              <span className="dot">.</span>
              <span className="part">cb</span>
            </p>
          </Col>
          <Col
            xs={12}
            sm={10}
            className={`bio ms-auto ${isMdScreen ? "pe-4" : ""}`}
          >
            <p className="text-sm-end">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis provident id expedita nostrum ipsam dicta quos iure
              facilis dolore. Dicta necessitatibus sint possimus nobis
              blanditiis odio fuga labore, iusto nostrum.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={5} lg={4} className="mb-md-5">
            <p className="text-start text-md-end">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis provident id expedita nostrum ipsam dicta quos iure
              facilis dolore. Dicta necessitatibus sint possimus nobis
              blanditiis odio fuga labore, iusto nostrum.
            </p>
          </Col>
          <Col xs={12} md={5} lg={4} className="mt-md-5">
            <p className="text-end text-md-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis provident id expedita nostrum ipsam dicta quos iure
              facilis dolore. Dicta necessitatibus sint possimus nobis
              blanditiis odio fuga labore, iusto nostrum.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default HeroLogo;
