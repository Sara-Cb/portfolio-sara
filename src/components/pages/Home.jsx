import { Row } from "react-bootstrap";
import HeroLogo from "../elements/HeroLogo";

function Home() {
  return (
    <div className="pageContainer">
      <Row className="hero">
        <HeroLogo />
      </Row>
    </div>
  );
}

export default Home;
