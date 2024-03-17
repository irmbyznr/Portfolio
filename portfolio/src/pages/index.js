import React from 'react'
import { AboutMe } from '../components/About me/about-me'
import PageHeader from '../components/Common/page-header'
import { Contact } from '../components/Contact/contact'
import { HomePage } from '../components/HomePage/home-page'
import { Projects } from '../components/Projects/projects'
import { Skills } from '../components/Skills/skills'


const Pages = () => {
  return (
<>
<HomePage/>
<PageHeader title="About Me"/>
<AboutMe/>
<PageHeader title="Skills"/>
<Skills/>
<PageHeader title="Experience"/>
{/* experince */}
<PageHeader title="Projects"/>
<Projects/>
<PageHeader title="Contact Me"/>
<Contact/>

</>
  )
}

export default Pages