import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className='resume-flex'>
                <div className='skill-div'>
                    <h3>Skills</h3>

                    <ul>
                        <li> Javascript</li>
                        <li>CSS/HTML</li>
                        <li>Node.js</li>
                        <li> React</li>
                        <li> MongoDB</li>
                        <li> Mongoose</li>
                        <li> Sequelize</li>
                        <li> GraphQL</li>
                        <li> Express</li>
                        <li> Handlebars</li>
                        <li>Inquirer</li>
                        <li>Responsive Web design</li>
                        <li> RESTful APIs</li>
                    </ul>
                </div>
                <div className='resume-link'>
                    <a href='https://docs.google.com/document/d/1RBbvv1r5nNEEK-T8Q4ndwCrJRutNOaIj9c6T8ZNT85Y/edit?usp=sharing'>Resume Link</a>
                </div>
            </div>



        </section>
    )
}

export default Resume;