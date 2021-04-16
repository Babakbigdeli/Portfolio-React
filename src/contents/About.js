import React, { Component } from 'react';
import SocialFooter from '../components/SocialFooter';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../image/Me.jpg';

class About extends Component {
render() {
return (


< div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<br></br>
<ReactTypingEffect className="typingeffect" text={['I am Babak Bigdeli','I am a full stack web developer']} speed={100} eraseDelay={400}/>
<br></br>
<p>45, living in Greater Manchester, a full stack Web Developer graduated from Manchester University BootCamp. 
      My passion for coding initially started with finding and tweaking VBA codes to use in MS Access and Excel. After nearly 20 years of working in Admin and Logistics industry, 
      I decided to learn a new skill and change my line of work mainly because I felt there is not much more left for me to learn. Therefore I enrolled 
      in the University of Manchester's Full-Stack Bootcamp which was a 24-week intensive programme focused on teaching programming skills in 
      HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express, Handelbars, Firebase, NodeJS, MySQL, MongoDB,  and ReactJS. Here I acquired a sound understanding of programming, 
      with a focus on test-driven development and collaborative version control with Github. I gained experience with backend technologies, building APIs and servers with Express and 
      MySql, whilst also covering the front-end with React and CSS. And that is just the start! What really excites me is the fact that I have just stepped into a world that demands constant 
      learning and keeping my knowledge up to date  probably for the rest of my life 😀
</p>
<p>I got avid interest in technology and computers, passion for music, reading, films and cooking/baking.
    Practising meditation, travelling, road trips, camping and spending quality time with my family and friends.
</p>
<br></br>
<SocialFooter />
</div>
)
}
}
export default About;