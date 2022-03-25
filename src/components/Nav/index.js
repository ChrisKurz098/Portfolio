import React from 'react';
import '../../assets/css/style.css';
import portImg from "../../assets/images/profile-pic.jpg"
import About from "../About";
import Works from "../Works";
import Contact from "../Contact";
const Nav = ({ setView }) => {

    return (
        <header>
            <nav>
                <img id="profile-pic" src={portImg} alt="Developer Chris Kurz" />
                <button type='button' name="About" onClick={() => setView(<About/>)}>About Me</button>

                <button type='button' name="Work" onClick={() => setView(<Works/>)}>My Work</button>

                <button type='button' name="Contact" onClick={() => setView(<Contact/>)}>Contact</button>

                <button type='button' name='Resume'>Resume</button>

            </nav>
        </header>

    )
}

export default Nav;