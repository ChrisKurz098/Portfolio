import React from 'react';
import '../../assets/css/style.css';
import Footer from "../Footer";


const Nav = ({ view, setView }) => {
function buttonHandler(event) {
   (event.target.type === "button") && setView(event.target.name);
}
    return (
            <nav onClick={buttonHandler}>
       
                <button className={`  fadeIn-1 ${view === "About" && "nav-selected"}`}  type='button' name="About" >About Me</button>

                <button className={`fadeIn-2 ${view === "Work" && "nav-selected"}`}   type='button' name="Work" >My Work</button>

                <button className={`fadeIn-3 ${view === "Contact" && "nav-selected"}`} type='button' name="Contact" >Contact</button>

                <button className={`fadeIn-4 ${view === "Resume" && "nav-selected"}`} type='button' name='Resume'>Resume</button>
                <Footer/>
            
            </nav>   
    )
}

export default Nav;