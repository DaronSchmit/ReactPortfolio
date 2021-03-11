import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectArray from "../../assets/js/projects.json"

function Projects(props){
    const projects = projectArray;
    console.log(projects);

    return(        
        <div className="row row-cols-lg-1 row-cols-md-2 row-cols-sm-1 g-4">
        {projects.map(project => (<ProjectCard project={project}/>))}
      </div>
        )
}

export default Projects;