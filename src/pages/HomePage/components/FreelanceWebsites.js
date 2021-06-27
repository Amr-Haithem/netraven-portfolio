import {FaGithub} from "react-icons/fa";
import {SiUpwork,SiFreelancer,SiFiverr} from "react-icons/si";

import '../styles/HomePageStyle.css';
import { useState } from 'react';
const FreelanceWebsites = () => {

    const [freelanceController, setfreelanceController] = useState(1);

    const chooseFreelanceWeb = () => {

        if (freelanceController === 1) {
            return (
                <div className="Upwork leftFreelanceArea">
                    <p>Upwork Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                    <div className="buttonCont">
                    <a><button className="FreelancingAnchorTags">
                            go to Upwork
                        </button></a>
                    </div>
                </div>
            )
        }
        else if (freelanceController === 2) {
            return (
                <div className="fiverr leftFreelanceArea">
                    <p>Fiverr Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                    <div className="buttonCont">
                    <a><button className="FreelancingAnchorTags">
                        go to Fiverr
                        </button></a>
                    </div>
                </div>
            )
        }
        else if(freelanceController==3) {
            return (
                <div className="FreeLancer leftFreelanceArea">
                    <p>FreeLancer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                    <div className="buttonCont">
                    <a><button className="FreelancingAnchorTags">
                            go to FreeLancer
                        </button></a>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="GitHub leftFreelanceArea">
                    <p>GitHub Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                    <div className="buttonCont">
                    <a><button className="FreelancingAnchorTags">
                            go to GitHub
                        </button></a>
                    </div>
                </div>
            )

        }
    }
    return (
        <div className="FreelanceWebsitesDiv">
            {chooseFreelanceWeb()}
            <div className="FreeLancingIcons">
                <div className="oneIconCont"><SiUpwork className="icon" onClick={()=>setfreelanceController(1)}>upwork</SiUpwork></div>
                <div className="oneIconCont"><SiFiverr className="icon" onClick={()=>setfreelanceController(2)}>fiverr</SiFiverr></div>
                <div className="oneIconCont"><SiFreelancer className="icon" onClick={()=>setfreelanceController(3)}>FreeLancer</SiFreelancer></div>
                <div className="oneIconCont"><FaGithub className="icon" onClick={()=>setfreelanceController(4)}>Github</FaGithub></div>

            </div>
        </div>
    );
}

export default FreelanceWebsites;