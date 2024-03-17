import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./skills.scss"
import { Container, Image } from 'react-bootstrap';
import skills from "./skills.json"
import Spacer from '../Common/spacer';

export const Skills = () => {
  return (
    <Container className='skills-section'>
      <Swiper
       modules={[Navigation, A11y]}
      spaceBetween={20}
      navigation
      mousewheel={true}
      scrollbar={{ draggable: true }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
    >
      {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image src={skill.image} />
          </SwiperSlide>
        ))}
     



    
    </Swiper>
    </Container>
  )
}
