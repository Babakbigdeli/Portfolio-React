import React, { Component } from 'react';
import SocialFooter from '../components/SocialFooter';


class Contact extends Component {
render() {
return (
<div className="condiv">
<h1>Contact Me</h1>
<h3>Email  :   babakbigdeli@gmail.com</h3>
<h3>Phone   :   07456184955</h3>
<br></br>
<h3>Please download my CV <a  href="#" onClick={()=> window.open("https://docs.google.com/document/d/1DyQjN9hKZ-muCzeaDVhlilFg_Y2tNBTPvp52c6zfPos/edit?usp=sharing")}>here </a>(opens in new tab)</h3>
<>

<SocialFooter />
</>
</div>

)
}
}
export default Contact;
