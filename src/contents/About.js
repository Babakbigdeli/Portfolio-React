import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../image/Me.jpg';

class About extends Component {
render() {
return (


< div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<br></br>
<ReactTypingEffect className="typingeffect" text={['My name is Babak Bigdeli','I am a full stack web developer']} speed={100} eraseDelay={400}/>
<br></br>
<p>Living in Greater Manchester, I graduated from the University of Manchester's Bootcamp.
      Having developed a passion for coding which evolved after finding and tweaking VBA codes to use in MS Access and Excel. I spent many years working in the Admin and 
      logistics industry until I decided to learn a new skill and change my line of work because I felt the need to expand my horizons. 
      The bootcamp was a 24-week intensive programme focused on teaching programming skills in 
      JavaScript, jQuery, HTML5, CSS3, Bootstrap, NodeJS, MySQL, MongoDB, ReactJs, Express, Handelbars and Firebase.  This enabled me to acquire a sound understanding of programming, 
      with a focus on test-driven development and collaborative version control with Github. I gained experience with backend technologies, building APIs and servers with Express and 
      MySql, whilst also covering the front-end with React and CSS. This is just the start of my journey and I am excited to be in a world that demands continuous learning and development. 
      I look forward to keeping up with the evolving knowledge for the rest of my career.
</p>
<p> I also have an avid interest in computers and technology in general, passion for music, reading, films and cooking. I tend to balance my life and everyday stresses by practising  meditation, travelling etc.
</p>
</div>
)
}
}
export default About;