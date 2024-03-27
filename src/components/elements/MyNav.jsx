import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import ThemeButton from "./ThemeButton";
import Logo from "./Logo";

function MyNav() {
  const location = useLocation();

  const dropdownRef = useRef(null);

  const size = useSelector((state) => state.screen.size);
  const isMdScreen = size === "md";
  const isLgScreen = size === "lg";

  const [activeLink, setActiveLink] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
    setIsNavOpen(false);
  }, [location]);

  const handleToggle = (event) => {
    event.stopPropagation();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar className="myNav fixed-top darkBg">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col className={`h-100 ${isLgScreen ? "col-2" : "col-3"}`}>
            <Navbar.Brand as={Link} to={"/"}>
              <Logo />
            </Navbar.Brand>
          </Col>

          {isLgScreen || isMdScreen ? (
            <>
              <Col className={isLgScreen ? "col-8" : "col-6"}>
                <Row className="align-items-center">
                  <Col>
                    <Nav className="justify-content-center">
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/"
                          className={activeLink === "h" ? "active" : ""}
                        >
                          {isLgScreen ? "Home" : <i className="bi bi-house" />}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/projects"
                          className={activeLink === "p" ? "active" : ""}
                        >
                          {isLgScreen ? (
                            "Projects"
                          ) : (
                            <i className="bi bi-archive" />
                          )}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/curriculum"
                          className={activeLink === "cv" ? "active" : ""}
                        >
                          {isLgScreen ? (
                            "Curriculum"
                          ) : (
                            <i className="bi bi-file-text" />
                          )}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/contacts"
                          className={activeLink === "c" ? "active" : ""}
                        >
                          {isLgScreen ? (
                            "Contact Me"
                          ) : (
                            <i className="bi bi-envelope" />
                          )}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
              </Col>
              <Col
                className={`justify-content-end ${
                  isLgScreen ? "col-2" : "col-3"
                }"`}
              >
                <Row className=" justify-content-end align-items-center">
                  <ThemeButton size={"m"} />
                </Row>
              </Col>
            </>
          ) : (
            <>
              <Col className="d-flex flex-row justify-content-center align-items-center">
                <span
                  className="bi bi-list d-block fs-5"
                  onClick={handleToggle}
                />
              </Col>
              <div
                ref={dropdownRef}
                id="dropped-nav"
                className={isNavOpen ? "" : "d-none"}
              >
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
                    Contact Me
                  </Nav.Link>
                </Nav.Item>
              </div>
              <Col className="col-3">
                <Row className="align-items-center justify-content-end">
                  <ThemeButton size={"xs"} />
                </Row>
              </Col>
            </>
          )}
        </Row>
      </Container>
      <div className="navUnderline" />
    </Navbar>
  );
}

export default MyNav;
