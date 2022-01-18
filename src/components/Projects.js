import React, { Component } from 'react'


class Projects extends Component {
    render() {
    return (
    
    <div className="card">
        <img src={this.props.image} alt="Project Screenshot" width="300" height="100"/> 
        <h2>
        {this.props.title}
        </h2>
        <h6>
        {this.props.description}
        </h6>
        <h5>
        {/*eslint-disable-next-line*/}
        <a className="card-link" href="#" onClick={()=> window.open(this.props.githubLink)}>
        Github Link
        </a>
        <br></br>
        <br></br>
        {/*eslint-disable-next-line*/}
        <a className="card-link1" href="#" onClick={()=> window.open(this.props.deployedLink)}>
        Deployed Link
        </a>
        </h5>
      </div>

    )};
    }
    export default Projects;
 

