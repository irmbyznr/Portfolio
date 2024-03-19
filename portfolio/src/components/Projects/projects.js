import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import PageHeader from "../Common/page-header";
import "./projects.scss";
import projects from "./projects.json";
import ScrollReveal from 'scrollreveal'

export const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal('.projects-fadein', { delay: 200, distance: '50px', origin: 'bottom', duration: 1000 });
  }, []);
  return (
   
     <Container className="projects-section">
      <PageHeader title="Projects" />
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="projects-fadein">
            <Card  >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={project.image}/>
                <Card.Title  className="overlay d-none">
                  <span>{project.title}</span>
                </Card.Title>
              </a>
              <Card.Body>
                <Card.Text>{project.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  
  );
};
