import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'





class Projects extends Component {
    render() {
    return (
      <>
  <Card >
    <Card.Img src={this.props.image} />
     <Card.Body>
         <Card.Title as="h2">
            {this.props.title}
         </Card.Title>
         <Card.Text as="h6">
            {this.props.description}
         </Card.Text>
     </Card.Body>
     <Card.Footer as="h5">
           <a href={this.props.githubLink} className="card-link">
              Github Link
            </a>
            <br></br>
            <a href={this.props.deployedLink}className="card-link">
              Deployed Link
            </a>
    </Card.Footer>
  </Card>
        </>
    );
    }
    }
    export default Projects;
 

