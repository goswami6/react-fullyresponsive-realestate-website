import React, { useEffect } from 'react'
import './Contact.css'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    
      }, [])
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
            <span className='orangeText' data-aos="zoom-in">Our Contacts</span>
            <span className='primaryText' data-aos="zoom-in">Easy to Contact Us</span>
            <span className='secondaryText' data-aos="zoom-in">After years of hard work and dedication, Sarah finally achieved her lifelong dream of becoming a published author, much to her delight and relief</span>

            <div className="flexColStart contactModes">
                {/* first row */}
                <div className="flexStart row">
                    <div className="flexColCenter mode" data-aos="fade-up-right">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <MdCall size={25}/>
                            {/* <BsFillChatDotsFill /> */}
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span><span className='secondaryText'>xxxxx</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>
                    {/* second mode */}
                    <div className="flexColCenter mode" data-aos="fade-up-left">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            {/* < size={25}/> */}
                            <BsFillChatDotsFill  size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span><span className='secondaryText'>xxxxx</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>
                </div>
                {/* second row */}
                <div className="flexStart row" >
                    <div className="flexColCenter mode" data-aos="fade-down-right">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            {/* <MdCall size={25}/> */}
                            <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span><span className='secondaryText'>xxxxx</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>
                    {/* second mode */}
                    <div className="flexColCenter mode" data-aos="fade-down-left">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            {/* < size={25}/> */}
                            <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span><span className='secondaryText'>xxxxx</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>
                </div>
            </div>

        </div>
        {/* right side */}
        <div className="c-right">
            <div className="c-image-container" data-aos="fade-up"
     data-aos-duration="4000">
                <img src="./images/c1.jpg" alt="" />
            </div>
        </div>
        </div>  
    </section>
  )
}

export default Contact
