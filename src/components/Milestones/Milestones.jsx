import React from 'react'
import { MIlestone } from './Milestone/MIlestone'
import "./Milestones.css";

export const Milestones = () => {
  return (

    <div className='milestones--container'>
                <section className='container'>

            <div className="milestones--header">
                MY MILESTONES
            </div>

            <h4 className="milestones--title">
                What sets you apart in your projects?
            </h4>

            <div className="milestones--list">
                <MIlestone value="100%" caption="Customer satisfaction guarantee when you work with me" />
                <MIlestone value="3" caption="Personal projects completed and deployed successfully!" />
            </div>
            </section>
    </div>
  )
}
