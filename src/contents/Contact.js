import React, { Component } from 'react';
import {FaGithub, FaLinkedin } from 'react-icons/fa';


class Contact extends Component {
render() {
return (
<div className="condiv contact">
<h1>Contact Me</h1>
<h3>Email  :   babakbigdeli@gmail.com</h3>
<h3>Phone   :   07456184955</h3>
<br></br>
<h3>Please take a look at my CV <a href="https://docs.google.com/document/d/1DyQjN9hKZ-muCzeaDVhlilFg_Y2tNBTPvp52c6zfPos/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here </a>(opens in a new tab)</h3>
<br></br>
<h3>And my Github and Linkedin profile by clicking below icons</h3>
<div>
<a href="https://github.com/Babakbigdeli" ><FaGithub size={40} style={{ fill: 'white' }}/></a>
<span></span>
<a href="https://www.linkedin.com/in/babak-bigdeli-3b999055" ><FaLinkedin size={40} style={{ fill: 'white' }}/></a>
</div>
</div>


)
}
}
export default Contact;
