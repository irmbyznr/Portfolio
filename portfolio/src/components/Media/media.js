import React from 'react'
import {SiLinkedin,SiGithub,SiInstagram} from "react-icons/si"
import "./media.scss"

export const Media = () => {
  return (
    <section className='social-btn'>
      <a href="https://www.linkedin.com/in/irem-beyzanur-ofluoglu/">
        <SiLinkedin/>
      </a>
      <a href="https://github.com/irmbyznr">
        <SiGithub/>

      </a>
      <a href="https://www.instagram.com/teklikoltukbireyi/">
      <SiInstagram/>
      </a>

    </section>
  )
}
