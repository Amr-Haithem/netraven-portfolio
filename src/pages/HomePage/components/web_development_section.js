import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/web_development_section.css';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

//import certificate from '../../../assets/images/ben-kolde-bs2Ba7t69mM-unsplash (1).jpg';


const WebDevelopmentSection = () => {
    
    const { ref, inView } = useInView();
    const rgtAnimation = useAnimation();
    const lftAnimation = useAnimation();

  
useEffect(() => {
    if (inView) {
        rgtAnimation.start(
            {
                
                display:"flex",
                x: 0,
                transition:{

                    duration: .6

                }
            }
        )
        lftAnimation.start(
            {
                display:"flex",
                y: 0,
                transition:{

                    duration: .6

                }
            }
        )

    }
    else {
        rgtAnimation.start(
            {
                
                
                display:"none",
                x: "100vw"
            }
        )
        lftAnimation.start(
            {
                display:"none",
                y: "100vw"
            }
        )
    }
}, [inView])

    return (
        <div 
        ref={ref} className="webDevelopmentSectionMain">
            <motion.div animate={lftAnimation} className="leftSideWeb">
                <p>
                    Request your website, indulge in the online world, and face users with creative websites done using HTML, CSS, JAVASCRIPT, REACT.
                </p>

            </motion.div>
            <motion.div
                className="rightSideWeb"
                animate={rgtAnimation}
                >

            </motion.div>
        </div>
    );
}

export default WebDevelopmentSection;