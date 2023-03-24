import React from 'react'
import { PropTypes } from 'prop-types'

const BlackButton = ({text}) => {
  return (
    <>
    <button className='bg-[#202020]'>{text}</button>
    </>
  )
}

export default BlackButton;

BlackButton.propTypes = {
  text: PropTypes.string,
}