import React, { Component } from 'react';
import Projects from '../components/Projects';
import SocialFooter from '../components/SocialFooter';
import SampleProjects from '../utility/SampleProjects';
import { Container } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns'




class Portfolio extends Component {
    constructor(props){
        
        super(props);
        this.state={SampleProjects}}

renderProjects = () => {

    return SampleProjects.map( (item, index) =>
    <Projects
        key = {index}
        image = {item.image}
        description = {item.description}
        title = {item.title}
        deployedLink = {item.deployedLink}
        githubLink = {item.githubLink}
    />
    );
}
render() { 
    return (
<Container className="condiv">
    <>
        <CardColumns >
            {this.renderProjects()}
        </CardColumns>
        <SocialFooter/>
    </>
</Container>

 );
}
}

export default Portfolio


