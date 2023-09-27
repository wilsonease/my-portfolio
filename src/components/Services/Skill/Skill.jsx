import React from 'react'
import "./Skill.css"

const Skill = ({skill, percentage}) => {
  return (
    <div className='skill'>
        <span className='skill--name'>{skill}</span>
        <div className="skill--percentage">
            <div style={{width: `${percentage}%`}} className='skill--percentage-filled'>
&nbsp;
            </div>
        </div>
    </div>
  )
}

export default Skill