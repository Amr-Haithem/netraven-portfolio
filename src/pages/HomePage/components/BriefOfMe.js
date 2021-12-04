import React from 'react';
import '../styles/HomePageStyle.css';
import certificate from '../../../assets/images/Certificate of completion front-end.jpg';
const BriefOfMe = () => {
    return (
        <div className="BriefOfMe">
            <div className="upperPart">
                <p>Computer Engineering student with a profound experience in both front-end Web development using HTML, CSS, BOOTSTRAP, and REACT and App-development using flutter with certification from Audacity organization.</p>
                <div className="imgContainer">
                    <img src={certificate} alt="certificate pic" />
                </div>
                <div className="lowerPart">

                </div>
                <div className="lowerPart">
                    <button className="lowerPartButton">
                        Download CV
                    </button>
                </div>


            </div>
        </div>
    );
}

export default BriefOfMe;