import React from 'react'
import './Programs.css'
import {programsData} from '../../assets/programsData'
import RightArrow from '../../images/rightArrow.png'

function Programs() {
  return (
    <div className="Programs" id="programs">
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-cat">
            {programsData.map((programs) => (
                <div className="category">
                    {programs.image}
                    <span>{programs.heading}</span>
                    <span>{programs.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs