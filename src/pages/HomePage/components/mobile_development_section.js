import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/mobile_development_section.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//import certificate from '../../../assets/images/balazs-ketyi-sScmok4Iq1o-unsplash.jpg';

const MobileDevelopementSection = () => {

    const { ref, inView } = useInView();
    const rgtAnimation = useAnimation();
    const lftAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            rgtAnimation.start(
                {
                   
                    x: 0,
                    transition: {

                        duration: .6

                    }
                }
            )
            lftAnimation.start(
                {
                    x: 0,
                    transition: {

                        duration: .6

                    }
                }
            )

        }
        else {
            rgtAnimation.start(
                {
                    

                    x: "-100vw"
                }
            )
            lftAnimation.start(
                {
                    

                    x: "100vw"
                }
            )
        }
    }, [inView])

    return (
        <div ref={ref} className="mobileDevelopmentSectionMain">

            <motion.div animate={
                rgtAnimation
            }
                className="rightSideMobile">

            </motion.div>
            <motion.div animate={
                lftAnimation
            }
                className="leftSideMobile">
                <p>
                    For an idea to rock or a business to succeed, you surely want to materialize it in a mobile app made using the google frame work Flutter and the google service Firebase.
                </p>

            </motion.div>
        </div>);
}

export default MobileDevelopementSection;