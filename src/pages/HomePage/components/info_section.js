import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/info_section.css';
import websiteImage from '../../../assets/images/website_image.png';
import mobileImage from '../../../assets/images/mobile_infoo.png';
import DesktopImages from '../../../assets/images/desktop_info.png';
import FreelanceWebsites from './FreelanceWebsites';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const InfoSection = () => {


    const { ref, inView } = useInView();
    const firstAnimation = useAnimation();
    const secondAnimation = useAnimation();
    const thirdAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            firstAnimation.start(
                {
                    display: "flex",
                    y: 0,
                    transition: {
                        delay:0,

                        duration: .6
                    }
                }
            )
            secondAnimation.start(
                {
                    y: 0,
                    transition: {
                        delay:.2,
                        duration: .6
                    }
                }
            )
            thirdAnimation.start(
                {
                    y: 0,
                    transition: {
                    delay:.4,
                        duration: .6

                    }
                }
            )

        }
        else {
            firstAnimation.start(
                {
                    y: "100vw",
                }
            )
            secondAnimation.start(
                {

                    y: "100vw"
                }
            )
            thirdAnimation.start(
                {

                    y: "100vw"
                }
            )
        }
    }, [inView])
    return (
        <div ref={ref} className="InfoSectionMain">
            <div className="upper_InfoSection">

                <div className="infoPanel">
                    <motion.div animate={
                        firstAnimation
                    } className="panels panel_1">
                        <div className="imageHolders panel_1_imageHolder">
                            <img id="websitePanelImage" src={websiteImage} alt="personal image" srcset="" />

                        </div>
                        <div className="infoPart panel_1_info">
                            I create front-end websites from scratch transfering from PSD, figma, and xd, or you can just order the colors, animations ,and styles and it will be transfered to HTML, CSS, REACT web app.

                        </div>
                    </motion.div>
                    <motion.div animate={
                        secondAnimation
                    } className="panels panel_2">
                        <div className="imageHolders panel_2_imageHolder">
                            <img id="websitePanelImage" src={mobileImage} alt="personal image" srcset="" />

                        </div>

                        <div className="infoPart panel_2_info">
                            Using the google frame work FLUTTER and the back-end as service FIREBASE, I will make you engaging mobile apps that resembles those in the projects tab.
                        </div>
                    </motion.div>
                    <motion.div
                        animate={thirdAnimation}
                        className="panels panel_3">
                        <div className="imageHolders panel_3_imageHolder">
                            <img id="websitePanelImage" src={DesktopImages} alt="personal image" srcset="" />

                        </div>

                        <div className="infoPart panel_3_info">
                            I make desktop apps for small busniesses that need desktop apps to keep records of their intakes and outtakes, using either JAVAFX, or FLUTTER
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="lower_InfoSection">

                <FreelanceWebsites />

            </div>
        </div>
    );
}

export default InfoSection;