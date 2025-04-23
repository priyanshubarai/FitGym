import React from 'react'
import "./Testimonial.css"
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import LeftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"
import {motion} from 'framer-motion'

const Testimonial = () => {

    const[selected,setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type:"spring" , duration : 3};

  return (
    <div className='testimonials'>
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span className="review"
        key={selected}
        initial={{opacity:0 , x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        >
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span>
                {testimonialsData[selected].name}
            </span>{" "} 
            - {testimonialsData[selected].status}
        </span>
      </div>

      <div className='right-t'>
        <motion.div
          initial={{opacity:0 , x:-100}}
          transition={{...transition,duration:2}}
          whileInView={{opacity:1 , x:0}}
        ></motion.div>
        <motion.div
          initial={{opacity:0 , x:100}}
          transition={{...transition,duration:2}}
          whileInView={{opacity:1 , x:0}}
        ></motion.div>
        <motion.img src={testimonialsData[selected].image} alt="" 
        key={selected}
        initial={{opacity:0 , x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        />
        <div className="arrows">
            <img 
            onClick={()=>{ selected===0 ? setSelected(tLength-1) : setSelected(selected=>selected-1) ;}}
            src={LeftArrow} alt="" />
            <img 
            onClick={()=>{ selected===tLength-1 ? setSelected(0) : setSelected(selected=>selected+1) ;}}
            src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
