import '../styles/HomePageStyle.css';
import certificate from '../../../assets/images/Certificate of completion front-end.jpg';
const BriefOfMe = () => {
    return (
        <div className="BriefOfMe">
            <p>Computer Engineering student with a profound experience in front-end Web development using HTML, CSS, BOOTSTRAP, and REACT with a certificate from Audacity organization.</p>
            <div className="imgContainer">
                <img src={certificate} alt="certificate pic" />
            </div>
        </div>
    );
}

export default BriefOfMe;