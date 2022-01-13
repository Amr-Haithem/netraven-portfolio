import React from 'react';
import HomeVideo from '../../assets/videos/Intro.mp4';
import BriefOfMe from './components/BriefOfMe';
import FreelanceWebsites from './components/FreelanceWebsites';
import './styles/HomePageStyle.css';
import './styles/FreelanceSection.css';
import './styles/BriefOfMe.css';
import FirstSection from './components/FirstSection';
import WebDevelopmentSection from './components/web_development_section';
import MobileDevelopementSection from './components/mobile_development_section';
import CertificateSection from './components/certificate_section';
import InfoSection from './components/info_section';
import FootNail from './components/footnail';
const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="vidContainer">
                <video autoPlay muted loop id='HomeVideo'>
                    <source src={HomeVideo} type='video/mp4' />
                </video>
            </div>
            <FirstSection/>
            <WebDevelopmentSection/>
            <MobileDevelopementSection/>
            <CertificateSection/>
            <InfoSection/>
            <FootNail/>

        </div>
    );
}

export default HomePage;