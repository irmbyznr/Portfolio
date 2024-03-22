import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./skills.scss";
import { Container, Image } from "react-bootstrap";
import skills from "./skills.json";
import PageHeader from "../Common/page-header";

export const Skills = () => {
  return (
    <Container className="skills-section">
      <PageHeader title="Skills" />
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        navigation
        mousewheel={true}
        scrollbar={{ draggable: true }}
        loop={true}
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          768:{
            slidesPerView: 4,

          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image src={skill.image} alt={skill.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
