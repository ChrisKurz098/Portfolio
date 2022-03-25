import React, { useState, useEffect } from "react";


function Projects() {
    const projects = ['Plantzzz', 'TubeSim', 'EMPL-Tracker', 'Spelling-Bee','Weather-Dashborard'];
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        getProjects();
        
    }, []);

    async function getProjects() {
        const projectArray = [];
        let index = 1;
        for(const project of projects) {
            const response = await fetch(`https://api.github.com/repos/chriskurz098/${project}`);
            const data = await response.json();
            console.log('DATA: ', data)
            await projectArray.push( {
                name: data.name,
                description: data.description,
                gitLink: data.git_url,
                liveLink: data.homepage,
                index: index
            });
            index++
           
        };
        setProjectData(projectArray);
    }

    console.log('ProjectData: ', projectData)

    return (
        <div className="project-card-container">
            {!projectData && <p>Gathering Projects...</p>}
            {projectData.map((data) => (
                <div key={data.index} className="project-card" style={{ animationDuration: `${data.index/2}s`}}>
                    <h4>{data.name}</h4>
                    <a href={data.gitLink}>
                   <img src={require('../../assets/images/gitIcon.png')} alt="GitHub Link"/>
                   </a>
                   <br/>
                   <p>{data.description}</p>
                  
                     {data.liveLink && <a className='liveLink' href={data.liveLink} target='__blank'>Live Link</a>}
                </div>
            ))}
        </div>
    )
};

export default Projects;