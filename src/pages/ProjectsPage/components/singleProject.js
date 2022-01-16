import React from 'react';
import {useState, useEffect } from 'react';
import '../styles/singleProjectStyle.css';
import { motion,useAnimation } from 'framer-motion';

const singleProject = ({ project }) => {
    
    const animationOfTitle = useAnimation();
    const [hoveredOnUpperPart, sethoveredOnUpperPart] = useState(false);
    useEffect(() => {
        if (hoveredOnUpperPart) {
            animationOfTitle.start(
                {
                    y:-40,
                    transition: {
                        duration: .6,
                        type:"spring",
                        stiffness:120,
                        duration:1
                    }
                }
            )
        }
        else{
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
    
    return (
        <div className="singleProjectBody">
            <div onMouseEnter={()=>sethoveredOnUpperPart(true)} onMouseLeave={()=>sethoveredOnUpperPart(false)} className="upperSingleProjectBody">
               <motion.h4
               animate={
                   animationOfTitle
               }
               
               >{
                   
                    project.getTitle()
                }</motion.h4>

                <p>{ hoveredOnUpperPart&& project.getDescription()}</p>
            </div>
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