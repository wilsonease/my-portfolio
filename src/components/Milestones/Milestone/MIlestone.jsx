import React from 'react'
import "./Milestone.css"

export const MIlestone = ({ value, caption }) => {
    return (
        <div className='milestone--container'>
            <div className="milestone--value">
                {value}
            </div>

            <div className="milestone--caption">
                {caption}
            </div>
        </div>
    )
}
