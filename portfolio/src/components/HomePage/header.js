import { Fragment, useEffect, useState } from "react";
import "./header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      setIsHeaderFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`top-navbar ${
        isHeaderFixed
          ? "position-fixed top-0 start-0 z-3 w-100 bg-white"
          : " position-fixed top-0 start-0 z-3 w-100 "
      }`}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <span>i</span>rmbyznr
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#_home">Home</Nav.Link>
            <Nav.Link href="#_about">About</Nav.Link>
            <Nav.Link href="#_skills">Skills</Nav.Link>
            <Nav.Link href="#_projects">Projects</Nav.Link>
            <Nav.Link href="#_contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
