import React from "react";
import { Card, Container, Row,Col } from "react-bootstrap";
import "./projects.scss"

export const Projects = () => {
  return (
    <Container className="projects-section">
      <Row>
        <Col md={4}>
          <Card>
            <a href="https://irmbyznr-microsoft.netlify.app/" target="_blank">
              <Card.Img variant="top" src="img/microsoft.png" />
            </a>
            <Card.Body>
              <Card.Title>Microsoft Clone</Card.Title>
              <Card.Text>
              This project is a study in the field of responsive web design, implemented using HTML, CSS, and Bootstrap.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <a href="https://irmbyznr-levis.netlify.app/" target="_blank">
              <Card.Img variant="top" src="img/levis.png" />
            </a>
            <Card.Body>
              <Card.Title>Levi's Clone</Card.Title>
              <Card.Text>
              This project is a single-page application developed using HTML, CSS, and Bootstrap. Through these projects, I enhanced my expertise in the responsive design domain.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <a href="https://quiklearn-chi.vercel.app/" target="_blank">
              <Card.Img variant="top" src="img/quiklearn.png" />
            </a>
            <Card.Body>
              <Card.Title>Quik Learn</Card.Title>
              <Card.Text>
              This project was developed using Vite.js, utilizing the JavaScript programming language. Data was organized as an array and object within a constants folder in the index.js file. Utilizing map loops, filtering, and destructuring methods, these data structures were incorporated into the components. Tailwind CSS was employed for responsive design. Additionally, Swiper, Count-Up, Material UI, Framer Motion, and Headless UI libraries were utilized in the development of this project. It's worth noting that the purpose of this project was to experiment with different libraries and frameworks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <a href="#">
              <Card.Img variant="top" src="img/portfolio.png" target="_blank" />
            </a>
            <Card.Body>
              <Card.Title>Portfolio</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <a href="#">
              <Card.Img variant="top" src="" target="_blank"/>
            </a>
            <Card.Body>
              <Card.Title>Maker's Mind</Card.Title>
              <Card.Text>
              This freelance project, currently in the development stage, showcases my proactive approach in crafting innovative solutions. Leveraging Next.js, I've utilized cutting-edge technologies to build dynamic and responsive web applications. This website is dedicated to providing information about a range of activities, including intelligence games and robotics coding workshops.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
