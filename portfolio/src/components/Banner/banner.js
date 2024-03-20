import React from "react";
import { Container } from "react-bootstrap";
import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner-section" id="_contact">
    <Container>
    <h2>
        I'm <span>available</span> for freelancing
      </h2>
      <p>
      As an experienced freelancer, I handle your projects with professionalism and efficiency. I offer superior freelance services tailored to meet your specific needs and deadlines. Equipped with the skills and expertise to bring your ideas to life, I consistently deliver high-quality results. I'm available for freelance collaborations and look forward to working together to bring your projects to fruition. Please feel free to get in touch to discuss your requirements!
      </p>
      <a href="https://www.linkedin.com/in/irem-beyzanur-ofluoglu/" target="_blank">Hire Me</a>
    </Container>
    </section>
  );
};

export default Banner;
