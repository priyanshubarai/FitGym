import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"
import adidas from "../../assets/adidas.png"

const Reasons = () => {
  return (
    <div className='Reasons'>
      <div className='left-r'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className='right-r'>
        <span>Some reasons</span>
        <div>
            <span className='stroke-text'>why </span>
            <span>choose us?</span>
        </div>

        <div className='details'>
            <div>
                <img src={tick} alt="" />
                <span>Over 140+ Expert coachs</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>Train smarter and faster than before</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>1 free program for new member</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>reliable partner</span>
            </div>
        </div>

        <span>OUR PARTNERS</span>
        <div className="partners">
            <img src={nb} alt="" />
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Reasons
