import React from "react";
import { Container, Col, Row, Image, Figure, Button } from "react-bootstrap";
import PageHeader from "../Common/page-header";
import "./about-me.scss";

export const AboutMe = () => {
  return (

      <Container>
      <PageHeader title="About Me"/>
      <section className="about-section">
        <Row>
          <Col md={6}>
            <Figure>
              <Figure.Image
                width={500}
                alt="About Section's Picture"
                src="img/Profile.png"
              />
            </Figure>
          </Col>
          <Col md={6} className="about-content">
            <p>
              Skilled Frontend Developer dedicated to crafting engaging web
              experiences. Proficient in HTML, CSS, JavaScript, React and
              Next.Js, I specialize in building dynamic and user-friendly
              applications. I prioritize delivering high-quality results and
              thrive in team settings, adapting seamlessly to new technologies.
              A quick learner with strong problem-solving abilities, I'm
              committed to staying updated on industry trends to ensure optimal
              performance.
            </p>
            <a href="Resume.pdf" download="irem_beyzanur_ofluoglu_resume.pdf"  title="Irem Beyzanur Ofluoglu's Resume">
              Download Resume
            </a>
          </Col>
        </Row>
      </section>
    </Container>

  );
};
