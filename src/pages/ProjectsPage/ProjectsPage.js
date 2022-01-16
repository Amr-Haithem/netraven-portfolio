import React from 'react';
import { useEffect,useState } from 'react';
import FootNail from '../HomePage/components/footnail.js';
import SingleProject from './components/singleProject.js';
import './styles/allPageStyle.css';
import { motion } from 'framer-motion';
import db from "../services/firebase";
import { onSnapshot,collection } from 'firebase/firestore';
import {Project} from "./Model/project";


const ProjectsPage = () => {
const [projects, setprojects] = useState([]);
    useEffect(() => {
        console.log("hey again it's me");


        onSnapshot(collection(db, "projects-data"), (snapshot) => {
            console.log("hlo");
            setprojects(snapshot.docs.map((doc)=> 
        
                { return new Project(doc.data().title,doc.data().description,doc.data().githubLink,doc.data().youtubeLink);}           
            ));
        });
    });

    return (
        <div className="ProjectsPage">
            <div className="TitleArea">
                <motion.h4
                    animate={
                        {
                            textShadow: "0px 0px 15px #ffffff",
                        }
                    }
                    transition={{
                        repeatType:'reverse',
                        repeat:Infinity,
                        duration:1.5
                        //yoyo: 50
                    }
                    }
                >
                    Projects
                </motion.h4>

            </div>
            <div className="projectsArea">
                <div className="selectorArea">

                </div>
                <div className="projectsAreaDown">
                    {
                    projects.map((project)=>(
                        <SingleProject project={project}/>
                    ))}
                </div>
            </div>
            <div className="contactMeArea">

            </div>

            <FootNail />
        </div>
    );
}

export default ProjectsPage;