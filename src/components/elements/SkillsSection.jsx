import { Col, Row } from "react-bootstrap";

function SkillsSection() {
  return (
    <Row className="sectionContainer skills">
      <Col xs={12} className="justify-content-center">
        <Row className="communication">
          <Col xs={12} className="title">
            <ul>
              <li>Communication</li>
              <li>Brand Identity</li>
              <li>Graphic Design</li>
              <li>Visual Identity</li>
            </ul>
          </Col>
          <Col xs={12} sm={5} className="description text-center text-sm-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolorem deserunt ratione tempora repellat qui quam, labore dolores
            aliquid excepturi eveniet? Iusto reiciendis alias distinctio
            impedit? Quaerat asperiores dolores nisi?
          </Col>
          <Col xs={12} sm={4} className="list text-end text-sm-start">
            <ul>
              <li>Logo & Palette Design</li>
              <li>Logo & Palette Design</li>
              <li>Logo & Palette Design</li>
              <li>Logo & Palette Design</li>
            </ul>
          </Col>
        </Row>
        <Row className="developer">
          <Col xs={12} className="title">
            <ul>
              <li>Web Design</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>DevOps</li>
            </ul>
          </Col>
          <Col
            xs={12}
            sm={7}
            md={5}
            className="description text-center text-sm-end"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolorem deserunt ratione tempora repellat qui quam, labore dolores
            aliquid excepturi eveniet? Iusto reiciendis alias distinctio
            impedit? Quaerat asperiores dolores nisi?
          </Col>
          <Col xs={12} sm={5} md={4} className="list text-end text-sm-start">
            <ul>
              <li>Logo & Palette Design</li>
              <li>Logo & Palette Design</li>
              <li>Logo & Palette Design</li>
              <li>Logo & Palette Design</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default SkillsSection;
