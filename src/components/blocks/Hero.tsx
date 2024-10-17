import React from 'react'

type PropTypes = {
  heading: string
  text: string
  image: string
}

const Hero = ({ heading, text, image }: PropTypes) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Hero
