import React from 'react';
import {useState, useEffect } from 'react';
import '../styles/singleProjectStyle.css';
import { motion,useAnimation } from 'framer-motion';
const singleProject = ({ project }) => {
    
    const animationOfTitle = useAnimation();
    const animationOfUpperPart=useAnimation();
    const [hoveredOnUpperPart, sethoveredOnUpperPart] = useState(false);
    useEffect(() => {
        if (hoveredOnUpperPart) {
            animationOfTitle.start(
                {
                    y:-35,
                    transition: {
                        duration: .6,
                        type:"spring",
                        stiffness:120,
                        duration:1
                    }
                }
            )
            animationOfUpperPart.start(
                {
                    boxShadow: "inset 0px 0px 0px",
                    transition: {
                        duration: .6,
                    }
                }
            )
        }
        else{
            animationOfUpperPart.start(
                {
                    boxShadow: "inset 0px 0px 100px rgb(7, 34, 39)",
                    transition: {
                        duration: .6,
                    }
                }
            )
            animationOfTitle.start(
                {
                    y: 0,
                    transition: {
                        duration: .6
                    }
                }
            )
        }
    }, [hoveredOnUpperPart]);
    

    console.log("this is one project");
   const checkIfDefined=()=>{
        if (project.getPhotoName()!=undefined) {
            return project.getPhotoName();
        }
        else{
            return "white.png";
        }
    }
    
    return (
        <div className="singleProjectBody">
            <motion.div
            animate={animationOfUpperPart}
            onMouseEnter={()=>sethoveredOnUpperPart(true)} onMouseLeave={()=>sethoveredOnUpperPart(false)} className="upperSingleProjectBody" 
            
            style={ {background: 'url(' + require('../../../assets/images/'+ checkIfDefined()) + ')'}}>
               <motion.h4
               animate={
                   animationOfTitle
               }>
                {
                    project.getTitle()
                }</motion.h4>

                <p>{ hoveredOnUpperPart&& project.getDescription()}</p>
            </motion.div>
            <div className="lowerSingleProjectBody">
                <div className="leftlowerSingleProjectBody">
                <a href={project.getYoutubeLink()} rel="noopener noreferrer" target="_blank"> <button>YouTube</button></a>
                </div>
                <div className="rightlowerSingleProjectBody">

                    <a href={project.getGithubLink()} rel="noopener noreferrer" target="_blank"><button>GitHub</button></a>


                </div>
            </div>
        </div>
    );
}

export default singleProject;