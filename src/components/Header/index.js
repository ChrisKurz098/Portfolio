import React from 'react';
import Nav from "../Nav";
import portImg from "../../assets/images/profile-pic.jpg"

const Header = ({view, setView}) => {
   
    return (
       <header>
      <div id="title">
            <img id="profile-pic-title" src={portImg} alt="Developer Chris Kurz"/>
            <h1>
                Chris Kurz
            </h1>
            <h2>
                Full Stack Web Development
            </h2>
        </div>
        <Nav view={view} setView={setView} />
      
       </header>
      
    )
}

export default Header;