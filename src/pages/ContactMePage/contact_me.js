
import './styles/contactmeMainPage.css';
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import FootNail from '../HomePage/components/footnail';
const ContactMe = () => {
    return (
        <div className="ContactMe">
            <div className="TitleAreaContact">
                <h4>
                    Contact me
                </h4>
            </div>
            {/* <div className="snippitSection">
                <div className="textContainer">
                    Eager to know you!
                </div>

            </div> */}

            <div className="lowerParto">
                <div className="lftPartition">
                    <div className="senderInfo">
                        <label htmlFor="">
                            Email:
                        </label>
                        <input type="text" placeholder='Email...' name="Email" id="" cols="30" rows="10" ></input>


                    </div>
                    <div className="senderMessage">
                        <label htmlFor="">
                            Your message:

                        </label>
                        <textarea placeholder='Enter your message here...' name="Email" id="" cols="30" rows="10" ></textarea>


                    </div>

                    <div className="sendButtonHolder">
                        <button>send</button>
                    </div>

                </div>
                <div className="rgtPart iconSection">
                    <div className="iconsHolder">
                        <div className="firstRowIcons">
                            <div className="iconHolder">
                                <FaLinkedin className="iconInContact" />
                            </div>
                            <div className="iconHolder">
                                <FaInstagram className="iconInContact" />
                            </div>
                        </div>
                        <div className="secondRowIcons">
                            <div className="iconHolder">
                                <FaTwitter className="iconInContact" />
                            </div>
                            <div className="iconHolder">
                                <FaGithub className="iconInContact" />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <FootNail/>
        </div>
    );
}

export default ContactMe;