import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import Logo from "./Logo";

function MyNav() {
  const location = useLocation();

  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1200);
  const [activeLink, setActiveLink] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1200);
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("h");
    } else if (location.pathname === "/projects") {
      setActiveLink("p");
    } else if (location.pathname === "/curriculum") {
      setActiveLink("cv");
    } else if (location.pathname === "/contacts") {
      setActiveLink("c");
    }
  }, [location]);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar className="myNav fixed-top darkBg" expand="md">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col className="col-4 h-100">
            <Navbar.Brand as={Link} to={"/"}>
              <Logo />
            </Navbar.Brand>
          </Col>

          {isLgScreen ? (
            <Col className="col-8">
              <Row className="align-items-center">
                <Col>
                  <Nav className="m-auto justify-content-end">
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/"
                        className={activeLink === "h" ? "active" : ""}
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/projects"
                        className={activeLink === "p" ? "active" : ""}
                      >
                        Projects
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/curriculum"
                        className={activeLink === "cv" ? "active" : ""}
                      >
                        Curriculum
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/contacts"
                        className={activeLink === "c" ? "active" : ""}
                      >
                        Contact me
                      </Nav.Link>
                    </Nav.Item>
                    <ThemeButton />
                  </Nav>
                </Col>
              </Row>
            </Col>
          ) : isMdScreen ? (
            <Col className="col-8">
              <Row className="align-items-center">
                <Col>
                  <Nav className="m-auto justify-content-end">
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/"
                        className={activeLink === "h" ? "active" : ""}
                      >
                        <i className="bi bi-house"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/projects"
                        className={activeLink === "p" ? "active" : ""}
                      >
                        <i className="bi bi-archive"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/curriculum"
                        className={activeLink === "cv" ? "active" : ""}
                      >
                        <i className="bi bi-file-text"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/contacts"
                        className={activeLink === "c" ? "active" : ""}
                      >
                        <i className="bi bi-envelope"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <ThemeButton />
                  </Nav>
                </Col>
              </Row>
            </Col>
          ) : (
            <>
              <Col className="d-flex flex-row justify-content-end align-items-center">
                <Link to="/search" className="searchForm">
                  <span>Search Creatives</span>
                </Link>
                <span
                  className="bi bi-list d-block fs-5"
                  onClick={handleToggle}
                />
              </Col>
              <div id="my-nav" className={isNavOpen ? "" : "d-none"}>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/portfolio/me"
                    className={activeLink === "p" ? "active" : ""}
                  >
                    Portfolio
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/feed"
                    className={activeLink === "f" ? "active" : ""}
                  >
                    Feed
                  </Nav.Link>
                </Nav.Item>
                <ThemeButton />
              </div>
            </>
          )}
        </Row>
      </Container>
      <div className="navUnderline" />
    </Navbar>
  );
}

export default MyNav;
