import React, { Component } from 'react';
import Projects from '../components/Projects';
import SampleProjects from '../utility/SampleProjects';




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
<div className="condiv">

  {this.renderProjects()}

</div>

 );
}
}

export default Portfolio


