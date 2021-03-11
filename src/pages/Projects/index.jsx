import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectArray from "../../assets/js/projects.json"

function Projects(props){
    const projects = projectArray;

    return(        
        <ProjectCard project={projects[0]} />
        )
}

export default Projects;