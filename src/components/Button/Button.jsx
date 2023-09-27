import React from 'react'
import "./Button.css"

const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };

export const Button = ({children, variant = "primary"}) => {
    const buttonClass = variantClasses[variant] || '';

  return (
    <button className={`btn ${buttonClass}`}>{children}</button>
  )
}
