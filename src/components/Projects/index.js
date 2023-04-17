import React, { useState, useEffect } from "react";
const projects = ['Plantzzz', 'NASAteroids', 'TubeSim', 'EMPL-Tracker',  'Racer', 'Fisher-Price-Record-maker'];


function Projects() {

    const [projectData, setProjectData] = useState([]);

    const [selected, setSelected] = useState("");

    useEffect(() => { getProjects() }, 
    //eslint-disable-next-line
    []);

    async function getProjects() {
        const projectArray = [];
        let index = 1;
        for (const project of projects) {
            const response = await fetch(`https://api.github.com/repos/chriskurz098/${project}`);
            const data = await response.json();
            await projectArray.push({
                name: data.name,
                description: data.description,
                gitLink: data.svn_url,
                liveLink: data.homepage,
                index: index,
                topics: data.topics
            });
            index++

        };
        setProjectData(projectArray);
    };


    function clickHandler(event) {
        const card = event.target;
        
      
        (card.className.includes("selected-card")) ? setSelected("") : setSelected(card);
      

    }

useEffect(()=> {
    //Makes sure to scroll based off of modified card element (after rerendering)
    if (selected !== "") selected.scrollIntoView(false);
}, [selected])

    return (
        <div className="project-card-container" onClick={clickHandler}>
            <p className="loading-message" style={{ "display": projectData.length ? "none" : "block" }} >Gathering Projects...</p>

            {projectData.map((data,i) => (
                <div key={data.index} id={data.name} className={`project-card ${selected.id === data.name && "selected-card"}`} style={{
                    backgroundImage: `require(../../assets/images/${data.name}.jpg)`,
                    animationDuration: `${data.index / 2}s`
                }}>
                    {/* this will use the name formatting placed in the projects array.Easy to make capitals where there are none */}
                    <h4>{projects[i]}</h4> 
                    
                    <div className="img-container">
                        <a href={data.gitLink} target='__blank'>
                            <img className="git-link"  src={require('../../assets/images/gitIcon.png')} alt="GitHub Link" />
                        </a>
                    </div>

                    <img className="screenshot" style={{ "display": selected.id === data.name ? "block" : "none" }} src={require(`../../assets/images/${data.name}.jpg`)} alt={`Screenshot of ${data.name}`}/>
                    <p>{data.description}</p>
                    <p style={{ "display": selected.id === data.name ? "none" : "block", "margin": "0","fontSize": "16px"}}>Click for more...</p>
                <div style={{ "display": selected.id === data.name ? "block" : "none" }} >
                    <p  className="tech-title" style={{ "display": selected.id === data.name ? "block" : "none" }}>   Technologies: </p> 
                    <ul className="columns-list">
                        {data.topics.map((topic) => (
                                <li key={topic}> {topic} </li>
                        ))}
                        </ul>
                </div>
                    <div className={`liveLinkDiv  ${selected === data.name && "reset"} `} >
                        {data.liveLink && <a className='liveLink' href={data.liveLink} target='__blank'>Live Link</a>}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Projects;