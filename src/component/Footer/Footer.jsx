import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkdin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className='footer'>
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkdin} alt="" />
            </div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
        </div>

        <div className='blur blur-footer-1'></div>
        <div className='blur blur-footer-2'></div>
    </div>
  )
}
export default Footer
