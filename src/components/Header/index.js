import React from 'react';
import Nav from "../Nav";

const Header = ({view, setView}) => {
   
    return (
       <header>
      <div id="title">
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