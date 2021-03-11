import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

function ProjectCard(props){
    return(
        <Card>
        <Card.Img variant="top" src={props.project.screencap} />
        <Card.Body>
            <Card.Title>{props.project.name}</Card.Title>
            <Card.Text>
            {props.project.description}
            </Card.Text>
            <Button href={props.project.deployedURL} variant="primary">Deployed Application</Button>
            <Button href={props.project.githubURL} variant="secondary">Github Link</Button>
        </Card.Body>
        </Card>    
        )
}

export default ProjectCard;

