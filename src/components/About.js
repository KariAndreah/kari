import React, { Component } from 'react';
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
                        <p className="aboutP">I am a self-taught developer from Houston Texas. I'm currently making my way though frontend technologies such as React, on my way towards full stack development. The internet has been my source of knowledge including the Odin Project, Udemy and YouTube. When I'm not programming you can find me writing jokes playing guitar, or riding my bike. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
