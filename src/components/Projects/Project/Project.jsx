import React from 'react'
import "./Project.css"

export const Project = ({projectImage}) => {
  return (
    <div className='project'>
        <img src={projectImage} alt="project screenshot" />
    </div>
  )
}
