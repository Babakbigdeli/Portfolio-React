import React, { Component } from 'react';
import Navitem from './Navitem';
import {FaGithub, FaLinkedin } from 'react-icons/fa'



class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Portfolio" tolink="/portfolio"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
            </ul>
            <div className="socialfooter">
            <a href="https://github.com/Babakbigdeli" ><FaGithub size={40} style={{ fill: 'black' }}/></a>
            <a href="https://www.linkedin.com/in/babak-bigdeli-3b999055" ><FaLinkedin size={40} style={{ fill: 'black' }}/></a>
            </div>
            </nav>
            )
        }
    }
    
    export default Navbar