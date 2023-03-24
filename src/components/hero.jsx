import React from 'react'
import { useState } from 'react'
import Switch from './switch'

const Hero = () => {
    const [clicked, setClicked] = useState(false)
  return (
    <div className='hero-section'>
       <div className='hero-text'>
            <h3 className='intro'>FACE FRONT, TRUE BELIEVERS!</h3> 
            
        </div> <Switch checked={clicked} onChange={(e) => setClicked(!clicked)} />
    </div>
  )
}

export default Hero