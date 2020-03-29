import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id='home'>
                <div className='containerName'>
                    <div>
                    <h1 className='name'>Hello, I'm Kari Burt.</h1>
                    <h2 className="job">Software Developer</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;