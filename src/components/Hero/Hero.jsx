import React from 'react'
import './Hero.css'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <>
      <section className='hero_wrapper'>
        <div className="paddings innerWidth flexCenter hero_container">
            <div className="flexColStart hero_left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <motion.h1
                    initial={{y: "2rem",opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    transition={{duration:2, tupe: "spring"
                    }}
                    >Discover <br/>Most Suitable <br/>Property</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText' >
                    Finding Your Perfect Place, One Click at a Time.
                    </span>
                    <span  className='secondaryText'>
                    Discover Your Home Sweet Home Here.
                    </span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="#001f54"size={25}/>
                    <input type="text" name="" id="" />
                    <button className="button"style={{ backgroundColor: '#001f54', color: '#fff'}}>
                        Search
                    </button>

                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>

                        </span>
                        <span className='secondaryText'>Premium Product</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span>+</span>

                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp  end={28}  />
                            <span>+</span>

                        </span>
                        <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>

            </div>
            <div className="flexCenter hero_right">
                <motion.div
                initial={{x: "7rem",opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration:9, tupe: "spring"
                }}
                
                className="image-container" data-aos="zoom-in-up">
                    {/* <img src="./images/image1.jpg" alt="" /> */}
                </motion.div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
