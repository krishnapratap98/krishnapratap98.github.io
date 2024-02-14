import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pro1 from "../images/project-img/Screenshot (248).png";
import pro2 from "../images/project-img/Screenshot (255).png";
import pro3 from "../images/project-img/Screenshot (257).png";



const Projects = () => {
  return (
    <>
      <div id="myprojects">
        <div id="projects">
          <h1>Projects</h1>
        </div>
        <div id="display">
          <div id="play" >
            <img src={pro1} alt="p1" id="video-links" />
            <div id="description">
            <p id="pro-titles1"> <i>Zostel Clone</i> </p>
            <p>Zostel is like a hostel that provides a home environment with all of the necessary conveniences at an affordable price.</p>
            <p>A collaborative project built by a team of 4 members  executive in 7 days</p>
            <p>Techstack used: React | Redux | CSS</p>
            
            <div id="link">
              <p> <a href="https://github.com/rachnarajaka040/Zostel.com_clone"> <FaGithub className="icon" /></a></p>
              <p className="icon">|</p>
              <p> <a href="https://zostelreactclone.vercel.app/"> <FaExternalLinkAlt className="icon" /></a> </p>
            </div>
            </div>

          </div>

          <div id="play" >
            <img src={pro2} alt="p1" id="video-links2" />
            <div id="description">
            <p id="pro-titles2"> <i>Airbnb Clone</i> </p>
            <p>Airbnb is an online marketplace connecting travelers with local hosts. On one side, the platform enables people to list their available space and earn extra income in the form of rent.</p>
            <p>A collaborative project built by a team of 4 members  executive in 7 days</p>
            <p>Techstack used : HTML | CSS | javaScript </p>
            <div id="link2">
              <p> <a href="https://github.com/Prathameshschavan/Project_Airbnb.com"><FaGithub className="icon" /></a> </p>
              <p className="icon">|</p>
              <p> <a href="https://dashing-lokum-307e4a.netlify.app/html/product"> <FaExternalLinkAlt className="icon" /></a></p>
            </div>
            </div>
          </div>
          <div id="play" >
            <img src={pro3} alt="p1" id="video-links3" />
            <div id="description">
            <p id="pro-titles3"> <i>PharmEasy Clone</i> </p>
            <p>PharmEasy is an Indian e-pharmacy company that sells medicines, diagnostics and telehealth online.</p>
            <p>A collaborative project built by a team of 4 members  executive in 7 days</p>
            <p>Techstack used : HTML | CSS | javaScript</p>
            <div id="link3">
              <p> <a href="https://github.com/VaishnaviR99/PharmEasy_clone13"><FaGithub className="icon" /></a> </p>
              <p className="icon">|</p>
              <p> <a href="https://pharmaeasy-t13-c38f52.netlify.app/"> <FaExternalLinkAlt className="icon" /></a></p>

            </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Projects;