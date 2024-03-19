import React from 'react'
import { HomePage } from '../components/HomePage/home-page'
import AboutPage from './about-page'
import ContactPage from './contact-page'
import ProjectsPage from './projects-page'
import SkillsPage from './skills-page'

const Pages = () => {
  return (
    <>
    <HomePage/>
    <AboutPage/>
    <SkillsPage/>
    <ProjectsPage/>
    <ContactPage/>
    </>
  )
}

export default Pages