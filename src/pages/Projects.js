import React from 'react'

const Projects = ({projects, currentProject, setCurrentProjectId}) => {
    const projectElements = projects.map(project => {
                                const {id, img, name, description} = project;
                                    return (
                                        <div 
                                        key={id} 
                                        // className={`project ${
                                        //     id === currentProject.id ? "activeProject" : ""
                                        // }`}
                                        className="project"
                                        // onClick={() => setCurrentProjectId(id)}
                                        >
                                            <img src={require(`../images/${img}`)} alt="project preview"/>
                                            <h2>{name}</h2>
                                            <p>{description}</p>
                                        </div>
                                    )
                                })

    return (
        <section className="projects">
            {projectElements}
        </section>
    )
}

export default Projects;