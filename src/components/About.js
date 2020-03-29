import React, { Component } from 'react';
import './About.css';
import pic from '../images/Kari.jpg';

class About extends Component {
    render() {
        return (
            <div id='about'>
                <div className='tc containerAbout'>
                    <div className='col'>
                        <img src={pic} alt="Profile Pic" className="picsize"></img>
                    </div>
                    <div className='col2 aboutText'>
                        <h1 className='aboutH1'>About Me</h1>
                        <p className="aboutP">I am a self-taught developer from Houston Texas."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
