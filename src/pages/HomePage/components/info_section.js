import React from 'react';
import { useState } from 'react';
import '../styles/info_section.css';
import websiteImage from '../../../assets/images/website_image.png';
import mobileImage from '../../../assets/images/mobile_infoo.png';
import DesktopImages from '../../../assets/images/desktop_info.png';

const InfoSection = () => {
    return (
        <div className="InfoSectionMain">
            <div className="infoPanel">
                <div className="panels panel_1">
                    <div className="imageHolders panel_1_imageHolder">
                    <img id="websitePanelImage" src={websiteImage} alt="personal image" srcset="" />

                    </div>
                </div>
                <div className="panels panel_2"> 
                    <div className="imageHolders panel_2_imageHolder">
                    <img id="websitePanelImage" src={mobileImage} alt="personal image" srcset="" />

                    </div></div>
                <div className="panels panel_3"> 
                    <div className="imageHolders panel_3_imageHolder">
                    <img id="websitePanelImage" src={DesktopImages} alt="personal image" srcset="" />

                    </div></div>
            </div>
        </div>
    );
}

export default InfoSection;