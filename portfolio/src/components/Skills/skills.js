import React from 'react'
import {ProgressBar} from "react-bootstrap"
import "./skills.scss"

export const Skills = () => {
  return (
   <div className='w-50 skill-progress'>
   <h5>HTML</h5>
   <ProgressBar variant='warning' animated now={80} />
   <h5>CSS</h5>
   <ProgressBar variant='info' animated now={80} />
   <h5>JavaScript</h5>
   <ProgressBar variant='success' animated now={50} />
   <h5>React</h5>
   <ProgressBar variant='danger' animated now={70} />


   </div>
  )
}
