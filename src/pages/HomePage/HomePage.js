import HomeVideo from '../../assets/videos/Particle Fairy Dust.mp4';
import BriefOfMe from './components/BriefOfMe';
import './styles/HomePageStyle.css';
const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="vidContainer">
                <video autoPlay muted loop id='HomeVideo'>
                    <source src={HomeVideo} type='video/mp4' />
                </video>
            </div>
            <BriefOfMe/>
        </div>
    );
}

export default HomePage;