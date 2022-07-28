import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../assets/testimonialsData'
import RightArrow from '../../images/rightArrow.png'
import leftArrow from '../../images/leftArrow.png'
import {motion} from 'framer-motion'

const Testimonial = () => {
  const transition = {type:'spring', duration:3}
  const [selected, setSelected] = useState(0)
  const tLength = testimonialsData.length
  
  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>{testimonialsData[selected].review}</span>
            <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name} - {testimonialsData[selected].status}</span>
        </div>

        <div className="right-t">
          <motion.div
          initial={{opacity:0, x:-100}}
          transition={{...transition, duration:2}}
          whileInView={{opacity:1, x:0}}
          >

          </motion.div>

          <motion.div
                    initial={{opacity:0, x:100}}
                    transition={{...transition, duration:2}}
                    whileInView={{opacity:1, x:0}}
          >

          </motion.div>
          <img src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img
            onClick={() => {
              selected === 0 
            ? setSelected(tLength -1)
            : setSelected((prev) => prev -1) }} 
             src={leftArrow} alt="" />

            <img 
            onClick={() => {
              selected === tLength - 1
            ? setSelected(0)
            : setSelected((prev) => prev + 1) }} 
            src={RightArrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Testimonial