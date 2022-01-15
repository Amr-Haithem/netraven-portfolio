import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/certificate_section.css';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const CertificateSection = () => {

    const { ref, inView } = useInView();
    const rgtAnimation = useAnimation();
    const lftAnimation = useAnimation();
    useEffect(() => {
        if (inView) {
            rgtAnimation.start(
                {
                    display: "flex",

                    y: 0,

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
                    display: "none",
                    y: "100vw",
                }
            )
            lftAnimation.start(
                {

                    x: "-100vw"
                }
            )
        }
    }, [inView])

    return (
        <div ref={ref} className="CertificateSectionMain">
            <motion.div animate={
                lftAnimation
            } className="leftSideCertificate">
                <p>
                    Certified from the world-wide known Udacity organization, which has 1.6 million users from around the world.
                </p>

            </motion.div>
            <motion.div
                animate={rgtAnimation}
                className="rightSideCertificate">

            </motion.div>
        </div>
    );
}

export default CertificateSection;