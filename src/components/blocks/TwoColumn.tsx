import React from 'react'

type PropTypes = {
  heading: string
  text: string
  image: string
  direction: string
}

const TwoColumn = ({ heading, text, image, direction }: PropTypes) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  )
}

export default TwoColumn
