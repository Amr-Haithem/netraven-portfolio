import React from 'react';
import '../styles/FirstSection.css';
import myImage from '../../../assets/images/street new.png';
const FirstSection = () => {
    return ( 
        <div className="FirstSection">
            <div className="solidColor">
                <div className="imgHolder">
                    <img id="personalImage"src={myImage} alt="personal image" srcset="" />
                </div>
                <div className="myNameAndIntro">
                    
                <p>
                   Hey, I am Amr Haytham and I make brilliant web and mobile apps!
                </p>
                <button className="contactMeButton">
                    Contact me!
                </button>


                </div>
            </div>
        </div>
     );
}
 
export default FirstSection;