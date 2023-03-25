import React from 'react'
import { PropTypes } from 'prop-types'

const BlackButton = ({text}) => {
  const caps = text.c
  return (
    <>
    <button className='bg-[#202020] black'>{text}</button>
    </>
  )
}

export default BlackButton;

BlackButton.propTypes = {
  text: PropTypes.string,
}

export const RedButton = ({text}) => {
  return (
    <>
    <button className='red-btn'>{text}</button>
    </>
  )
}

RedButton.propTypes = {
  text: PropTypes.string,
}