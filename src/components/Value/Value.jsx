import React, { useEffect } from 'react'
import { Accordion,
            AccordionItem,
        AccordionItemHeading,
        AccordionItemButton,
        AccordionItemPanel,
        AccordionItemState,
    }from  'react-accessible-accordion'
    import 'react-accessible-accordion/dist/fancy-example.css';
    import { MdOutlineArrowDropDownCircle } from "react-icons/md";
    import './Value.css'
    import data from '../../Utils/Accordion'
    import AOS from "aos";
import "aos/dist/aos.css";


const Value = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    
      }, [])
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="v-image-container">
                    <img src="./images/v1.jpg" alt=""  className='one' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
                    <img src="./images/v2.jpg" alt="" className='two'
                    data-aos="fade-right"
                    data-aos-offset="310"
                    data-aos-easing="ease-in-sine"/>
                </div>
            </div>

            <div className="flexColStart v-right">
                <span className='orangeText'data-aos="zoom-in">Our Value</span>
                <span className='primaryText'data-aos="zoom-in">Value We Give to You</span>
                <span className='secondaryText'data-aos="zoom-in">Welcome Home, Where Your Story Begins.</span>


                <Accordion allowMultipeExpanded = {false}
                    preExpanded={[0]}className="accordion"
                    >
                        {
                            data.map((item, i)=> {
                                return (
                                    <AccordionItem className='accordionItem' key={i} uuid={i}
                                    data-aos="fade-left">
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDownCircle size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>

                                    </AccordionItem>
                                )
                            })

                        }
                    
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value
