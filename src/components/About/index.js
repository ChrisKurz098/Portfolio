import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className='about-flex1'>
                <img className='prof-pic' src={require('../../assets/images/profile-pic.jpg')} alt='Chris Kurz'/>
            </div>
            <div className='about-flex2'>
            <h2>About Me</h2>
            <p>Full-Stack web developer with an extended background in digital media production, providing knowledge in visual design and a high attention to detail. Currently earning a certificate from the University of Oregon in Full-Stack Web Development. Strengths include punctuality, meeting deadlines, work ethic, teamwork and efficiency. Finds excitement in learning new things and working with like-minded individuals to solve problems and execute complex tasks.
            </p>
        </div>
        </section >
    )
}

export default About;