import React, { useEffect } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../Utils/Slider.json'
import { sliderSetting  } from '../../Utils/Common'
import AOS from "aos";
import "aos/dist/aos.css";

const Residencies = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    
      }, [])
  return (
   <section className="r-wrapper">
    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart" data-aos="zoom-in">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSetting}>
            <SliderButtons />
            {
                data.map((card, i)=> (
                    <SwiperSlide key={i}>
                        <div className="flexColStart r-card" data-aos="fade-up"
     data-aos-duration="3000">
                            <img src={card.image} alt="home" />

                            <span className="secondaryText r-price">
                                <span style={{color:"#0a1128"}}>Rs</span>
                                <span>{card.price}</span>
                            </span>

                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.detail}</span>

                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>


    </div>
   </section>
  )
}

export default Residencies;

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="r-button flexCenter">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
}
