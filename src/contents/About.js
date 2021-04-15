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
      My passion for coding started with finding and tweaking VBA codes to use in Excel macros. 
     I am a good team player who uses every oppurtunity to learn new concepts and keep my knowledge up to date.
</p>
<p>I got avid interest in technology and computers, passion for music, reading, films and cooking/baking. 
    Practising meditation, travelling, road trips, wild camping, spending quality time with my family and my friends.
</p>
<br></br>
<SocialFooter />
</div>
)
}
}
export default About