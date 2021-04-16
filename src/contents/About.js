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
      My passion for coding started with finding and tweaking VBA codes to use in Excel macros. After nearly 20 years of working in logistics industry, 
      I decided to learn a new skill and change my line of work mainly because I felt there is not much more left for me to learn. And what really excites 
      me about this new skill is the fact that I have just stepped into a world that demands constant learning and keeping my knowledge up to date and there
      is definitely enough stuff for me to learn in this field for the rest of my life.
</p>
<p>I got avid interest in technology and computers, passion for music, reading, films and cooking/baking.
    Practising meditation, travelling, road trips, camping, spending quality time with my family and friends.
</p>
<br></br>
<SocialFooter />
</div>
)
}
}
export default About;