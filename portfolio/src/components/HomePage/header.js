import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"

export const Header = () => {
  return (
    <header>
      <Link to="#home-section">Home</Link>
      <Link to="#about-section" >About</Link>
      <Link to="#skills-section">Skills</Link>
      <Link to="#projects-section" >Projects</Link>
      <Link to="#contact-section">Contact</Link>
    </header>
  );
};
