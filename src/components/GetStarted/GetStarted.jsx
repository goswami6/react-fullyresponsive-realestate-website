import React, { useEffect } from 'react'
import './GetStarted.css'
import AOS from "aos";
import "aos/dist/aos.css";

const GetStarted = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});

  }, [])
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container"data-aos="zoom-in">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Homy</span>
                <span className='secondaryText'>Ready to Get Started? Reach Out Today!</span>
                {/* <span className='secondaryText'>Find your residence soon</span> */}
                <button className="button">
                    <a href="#">Get Started</a>
                </button>
            </div>

        </div>
    </section>
  )
}

export default GetStarted
