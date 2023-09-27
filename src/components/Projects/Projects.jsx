import React from 'react'
import "./Projects.css"
import { Project } from './Project/Project'
import StageOne from "../../assets/img/stage-1.png"
import StageTwo from "../../assets/img/stage-2.png"
import StageThree from "../../assets/img/stage-3.png"
import StageFour from "../../assets/img/stage-4.png"


export const Projects = () => {
  return (
    <section className='container'>
        <div className="projects--container">
        <h6 className='projects--title'>MY PROJECTS</h6>
        <div className="projects--grid">
            <Project projectImage={StageOne}   />
            <Project projectImage={StageTwo}   />
            <Project projectImage={StageThree}   />
            <Project projectImage={StageFour}   />
        </div>
        </div>
      
    </section>
  )
}
