import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calorie from "../../assets/calories.png"
import {motion} from 'framer-motion'


const Hero = () => {

  const transition = {type : 'spring',duration: 3};
  const mobile = window.innerWidth<=768 ? true : false; 

  return (
    <div className='hero'>

      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header/>

        <div className="best-ad">
            <motion.div
            initial={{left: mobile ? "125px" : '238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition,type:'tween'}}
            ></motion.div>
            <span>the best fitness club in the town</span>
        </div>

        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>in here we will help you to shape and build your ideal body and live up your life to 
              fullest</span>
          </div>
        </div>

        <div className='figure'>
          <div>
            <span id='140'>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Member Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Program</span>
          </div>
          
        </div>

        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      <div className="right-h">

        <button className='btn'>Join Now</button>
        <motion.div className="heart-rate"
        transition={transition}
        whileInView={{right:'4rem'}}
        initial={{right:'-1rem'}}
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img className="hero-image" src={hero_image} alt="" />
        <motion.img className="hero-image-back" src={hero_image_back} alt="" 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        
        />

        <motion.div className="calories"
        transition={transition}
        whileInView={{right:'28rem'}}
        initial={{right:'37rem'}}
        >
          <img src={calorie} alt="" />
          <div>
          <span>Calories Burnt</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
