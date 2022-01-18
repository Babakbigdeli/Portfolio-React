import React, { Component } from 'react'


class Projects extends Component {
    render() {
    return (
    
    <div className="card">
      <div>
        <img src={this.props.image} alt="Project Screenshot" width="300" height="150"/> 
        </div>
        <div style={{height:`40px`}}>
        <h2>
        {this.props.title}
        </h2>
        </div>
        <div style={{height:`130px`}}>
        <h5>
        {this.props.description}
        </h5>
        </div>
        <div className="card-link" >
        <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer">
        Github Link
        </a>
        <span>|</span>
        <a href={this.props.deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed Link
        </a>
        </div>
        
      </div>

    )};
    }
    export default Projects;
 

