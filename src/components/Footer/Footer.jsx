import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings flexCenter innerWidth f-container">
            <div className="flexColStart f-left">
                <img src="./images/logo.png" alt="" width={120} />
                <span className='secondaryText'> 
                Step into Tomorrow with Confidence:<br/> Explore Our Footer for More.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>
                    Information
                    </span>
                    <span className='secondaryText'>145 Noida, FL 4571, India</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>Avout Us</span>

                    </div>

            </div>
        </div>
    </section>
  )
}

export default Footer
