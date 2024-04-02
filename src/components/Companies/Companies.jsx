import React, { useEffect } from 'react'
import './Companies.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Companies = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});

  }, [])
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-containers" data-aos="fade-up">
        <img src="./images/c1.png" alt="" />
        <img src="./images/c2.png" alt="" />
        <img src="./images/c3.jpeg" alt="" />
        <img src="./images/c4.png" alt="" />
      </div>
    </section>
 
  )
}

export default Companies

