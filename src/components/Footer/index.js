import React from 'react';

const Footer = () => {
    return (
        <div id = "myLinks">
            <a href='https://www.google.com' target="_blank" rel="noreferrer">
                <img className="fadeIn-1" src={require('../../assets/images/gitIcon.png')} alt="Git Link"/>
            </a>
             <a href='https://www.google.com' target="_blank" rel="noreferrer">
             <img className="fadeIn-2" src={require('../../assets/images/linkedInIcon.png')} alt="Git Link"/>
         </a>
          <a href='https://www.google.com' target="_blank" rel="noreferrer">
          <img className="fadeIn-3" src={require('../../assets/images/stackoverflow.png')} alt="Git Link"/>
      </a>
      </div>
    )
}

export default Footer;