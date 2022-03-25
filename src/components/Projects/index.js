import React, { useState, useEffect } from "react";


function Projects() {
    const projects = ['Plantzzz', 'CRT-Flashback-Machine'];
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        getProjects();
        
    }, []);

    async function getProjects() {
        const projectArray = [];
        await projects.forEach(async (project, i) => {
            const response = await fetch(`https://api.github.com/repos/chriskurz098/${project}`);
            const data = await response.json();
            console.log('DATA: ', data)
            await projectArray.push( {
                name: data.name,
                description: data.description,
                gitLink: data.git_url,
                liveLink: data.homepage
            });

            setProjectData([...projectArray, ...projectData, ]);
        });
        console.log('----done----')
        
    }

    console.log('ProjectData: ', projectData)

    return (
        <div>
            {projectData.map((data) => (
                <div key={data.name}>
                    Name: {data.name}
                </div>
            ))}
        </div>
    )
};

export default Projects;