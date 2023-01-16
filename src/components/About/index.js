import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className='about-flex1'>
                <img className='prof-pic' src={require('../../assets/images/profile-pic.jpg')} alt='Chris Kurz'/>
            </div>
            <div className='about-flex2'>
            <h2>About Me</h2>
            <p style={{textAlign: 'left',  textIndent: '10%'}}>
            I have always had a love for computer technology and as a kid I got my start in coding with HyperCard on my Macitosh Plus. It was a hand-me-down computer that was well beyond its prime, but its limitations inspired me try and make the most of what it could do. I would spend hours digging through The Complete HyperCard Handbook, a 900 page epic that documented everything you could do with the software, trying to find answers and solutions to make my ideas come to life.
            </p>
            <br/>
            <p style={{textAlign: 'left', textIndent: '10%'}}>
             I love solving problems and have a knack for finding solutions even when presented with unfamiliar tools. I can always find some way to make an idea come to fruition. I have a great ability to work under stress and tight deadlines and my ability to stay level headed in these circumstances helps create a productive and enjoyable environment for my teammates. My kindness and understanding of others make me very approachable for those seeking help and also allows me to be humble and accepting  when receiving constructive criticism and advice. 
            </p>
        </div>
        </section >
    )
}

export default About;