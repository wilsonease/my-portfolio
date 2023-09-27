import React from 'react'
import "./Services.css"
import { Button } from '../Button/Button'
import Skill from './Skill/Skill'
import MySkills from "../../assets/img/wilson-skills.png"

export const Services = () => {
    return (
        <section className='container'>

        <div className='services'>
            <h6 className='services--title'>ABOUT ME</h6>
            <div className='services--content'>
                <div className='services--content-pic-container'>
                    <div className='services--content-pic'>
                    <img src={MySkills} alt="" /> 
                    </div>
                </div>
                <div className='services--content-skills'>
                    <h3 className="services--content-skills-headline">
                        1 Year Experience on <br /> <span>Frontend Design</span>
                    </h3>

                    <div className='skills--content-skills-summary'>
                        Hello there! I'm Wilson Adejoh. I specialize in web design and development, and I'm deeply passionate and committed to my craft. With 1 year so far of experience as a professional frontend developer.
                    </div>

                    <div className='skills--content-skills-container'>

                        <Button variant='secondary'>Main Skills</Button>

                        <div className="skills--content-skills-list">
                            <Skill skill="HTML" percentage={90} />
                            <Skill skill="CSS" percentage={80} />
                            <Skill skill="Javascript" percentage={75} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
    )
}
