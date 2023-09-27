import React from 'react'
import SassLogo from "../../assets/img/sass-logo.png"
import LessLogo from "../../assets/img/less-logo.png"
import "./Sponsors.css"

export const Sponsors = () => {
  return (
    <section className='sponsors'>
        <img src={SassLogo} alt="spnosor" />
        <img src={LessLogo} alt="spnosor" />
    </section>
  )
}
