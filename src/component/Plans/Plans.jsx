import React from 'react'
import "./Plans.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className='Plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="header programs-header">
            <span className='stroke-text'>Ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>

        <div className="plans-container">
          {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature,i)=>(
                  <div className='feature'>
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>  
                ))}
              </div>

              <span><div>see more benefits -></div></span>
              <button className='btn'>Join Now</button>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Plans
