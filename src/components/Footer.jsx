import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";


export const Footer = () => {
    return (
        <>
            <div id="footer-parent">
                <div id="footer">
                    <div id="icons">
                        <a href="https://github.com/krishnapratap98" id="ref"><FaGithub className="footer-icons" /></a>
                        <a href="https://www.linkedin.com/in/krishna-pratap-8698a9267/" id="ref"><FaLinkedinIn className="footer-icons" /> </a>
                        {/* <a href="https://twitter.com/dilasa_thapa" id="ref"><FaTwitter className="footer-icons" /></a> */}
                        
                    </div>
                    <br />
                    <h3>Made By <span><AiFillHeart/> </span> Krishna Pratap Singh</h3>

                </div>
            </div>
        </>
    )
}