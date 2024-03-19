import React from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import PageHeader from "../Common/page-header";
import { ScrollToTop } from "../Common/scroll-to-top";
import { motion } from "framer-motion";

import "./contact.scss";

export const Contact = () => {
  return (
    <Container className="contact-section">
      <PageHeader title="Contact Me" />
      <p>
        Hello! I'm Irem, a frontend developer excited to showcase my work and
        experiences. Here on this platform, I exhibit my creativity and
        technical skills. You're welcome to explore my projects, where I blend
        passion with precision. With an eye for detail and a commitment to
        user-centric design, I craft engaging digital experiences. Whether you
        need a stunning website or an intuitive user interface, I'm here to
        bring your vision to life. Feel free to reach out; I'm eager to
        collaborate!
      </p>

      <div className="contact-content">
        <motion.div whileHover={{ rotate: 360, scale: 1.2 }}>
          <a href="mailto:irmbyznr@gmailcom">
            <IoIosMail />
          </a>
        </motion.div>
        <motion.div whileHover={{ rotate: 360, scale: 1.2  }}>
          <a href="tel:05347108721">
            <IoIosCall />
          </a>
        </motion.div>
        <motion.div whileHover={{ rotate: 360, scale: 1.2  }}>
          <a
            href="https://www.linkedin.com/in/irem-beyzanur-ofluoglu/"
            target="_blank"
          >
            <SiLinkedin />
          </a>
        </motion.div>
        <motion.div whileHover={{ rotate: 360, scale: 1.2  }}>
          <a href="https://github.com/irmbyznr" target="_blank">
            <SiGithub />
          </a>
        </motion.div>

        <motion.div whileHover={{ rotate: 360, scale: 1.2  }}>
          <a
            href="https://www.instagram.com/teklikoltukbireyi/"
            target="_blank"
          >
            <SiInstagram />
          </a>
        </motion.div>
      </div>
      <ScrollToTop />
    </Container>
  );
};
