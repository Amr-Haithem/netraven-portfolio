import React from 'react';
import FootNail from '../HomePage/components/footnail.js';
import SingleProject from './components/singleProject.js';
import './styles/allPageStyle.css';


const ProjectsPage = () => {
    return (
        <div className="ProjectsPage">
            <div className="TitleArea">
                <h4>
                    Projects
                </h4>

            </div>
            <div className="projectsArea">
                <div className="selectorArea">

                </div>
                <div className="projectsAreaDown">
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                </div>
            </div>
            <div className="contactMeArea">

            </div>

            <FootNail />
        </div>
    );
}

export default ProjectsPage;