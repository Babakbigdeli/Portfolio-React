import React, { Component } from 'react';
import {FaGithub, FaLinkedin } from 'react-icons/fa'






class SocialFooter extends Component {
render() {
return (
<div className="socialfooter">

<a href="https://github.com/Babakbigdeli" ><FaGithub size={40} style={{ fill: 'black' }}/></a>
<a href="https://www.linkedin.com/in/babak-bigdeli-3b999055" ><FaLinkedin size={40} style={{ fill: 'black' }}/></a>

</div>
)
}
}
export default SocialFooter;

