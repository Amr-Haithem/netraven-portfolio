
import './styles/contactmeMainPage.css';
import React from 'react';
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import FootNail from '../HomePage/components/footnail';
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';

const ContactMe = () => {

    const [email, setemail] = useState("");
    const [message, setmessage] = useState("")
    const sendEmail = (e) => {
        console.log(e.target);

        e.preventDefault();

        emailjs.sendForm('service_xgexcoq', 'template_rit2hzl', e.target, 'user_65RH8Kje7BggK2Whc67k0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return (
        <div className="ContactMe">
            <div className="TitleAreaContact">
                <motion.h4
                    animate={
                        {
                            textShadow: "0px 0px 15px #ffffff",
                        }
                    }
                    transition={{
                        repeatType: 'reverse',
                        repeat: Infinity,
                        duration: 1.5
                    }
                    }
                >
                    Contact me
                </motion.h4>
            </div>
            <form onSubmit={sendEmail} className="lowerParto">
                    <div className="lftPartition">
                        <div className="senderInfo">
                            <label htmlFor="">
                                Email:
                            </label>
                            <input type="text" placeholder='Email...' onChange={(e)=> setemail(e)} name="from_name" id="" cols="30" rows="10" ></input>


                        </div>
                        <div className="senderMessage">
                            <label htmlFor="">
                                Your message:

                            </label>
                            <textarea placeholder='Enter your message here...' onChange={(e)=> setmessage(e)} name="message" id="" cols="30" rows="10" ></textarea>


                        </div>

                        <div className="sendButtonHolder">
                            <button >send</button>
                        </div>
                    </div>
                <div className="rgtPart iconSection">
                    <div className="iconsHolder">
                        <div className="firstRowIcons">
                            <div className="iconHolder">
                             <a href="https://www.linkedin.com/in/amr-haithem-95a163226/" rel="noopener noreferrer" target="_blank"> <FaLinkedin  className="iconInContact" /></a>  
                            </div>
                            <div className="iconHolder">
                             <a href="https://www.instagram.com/the_netraven/" rel="noopener noreferrer" target="_blank">  <FaInstagram className="iconInContact" /></a> 
                            </div>
                        </div>
                        <div className="secondRowIcons">
                            <div className="iconHolder">
                             <a href="https://twitter.com/amr_haithem" rel="noopener noreferrer" target="_blank">   <FaTwitter className="iconInContact" /></a>
                            </div>
                            <div className="iconHolder">
                            <a href="https://github.com/Amr-Haithem" rel="noopener noreferrer" target="_blank">    <FaGithub className="iconInContact" /></a>
                            </div>
                        </div>


                    </div>

                </div>
            </form>
            <FootNail />
        </div>
    );
}

export default ContactMe;