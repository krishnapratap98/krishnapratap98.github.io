import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Nav.Link href='#home'>Krishna Pratap Singh</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>

                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>

                        {/* <Nav.Link href='#' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
                        <Nav.Link href='#about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-parent')}>About</Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href='#myprojects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project-parent')}>Projects</Nav.Link>

                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://github.com/krishnapratap98" > <p><FaGithub className='img' /></p></a>
                            <a href="https://www.linkedin.com/in/krishna-pratap-8698a9267/" > <p><FaLinkedinIn className='img' /></p> </a>

                        </div>
                        <button className='vvd'
                            onClick={() => console.log('connect')}>
                            <span><Nav.Link id='lets' href='#form'>Let's Connect</Nav.Link></span>
                        </button>
                    </span>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}