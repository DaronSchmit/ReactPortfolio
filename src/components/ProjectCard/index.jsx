import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.project.screencap} />
        <Card.Body>
            <Card.Title>{props.project.name}</Card.Title>
            <Card.Text>
            {props.project.description}
            </Card.Text>
            <Button variant="primary">Deployed Application</Button>
            <Button variant="secondary">Github Link</Button>
        </Card.Body>
        </Card>    
        )
}

export default ProjectCard;