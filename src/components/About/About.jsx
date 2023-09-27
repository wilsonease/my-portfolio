import React from 'react';
import ProfilePic from "../../assets/img/profile-pic.png"
import "./About.css"
import { Button } from '../Button/Button';

export const About = () => {
    return (
        
        <section className='container'>
        <div className='about--container'>
            <div className='about--welcome'>
                <h6 className='about--welcome-msg'>Welcome to my Portfolio</h6>
                <h3 className='about--welcome-intro'>Hi I'm</h3>
                <h3 className='about--welcome-intro-name'>Wilson Adejoh</h3>
                <h3 className='about--welcome-intro'>Frontend Engineer</h3>
                <span className='about--welcome-mission'>Collaborating with highly skilled individuals, to delivers top-quality services. </span>

                <div className='about--call-to-action'>
                    <Button>Hire Me!</Button>
                    <Button variant="secondary">Download CV </Button>
                </div>

            </div>
            <div className='about--profile-pic'>
                <img src={ProfilePic} alt="profile pic"  />
            </div>
        </div>
        </section>
    )
}
