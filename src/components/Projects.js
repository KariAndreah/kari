import React, { Component } from 'react';
import './Projects.css';
import picture from '../images/Project.jpg';



class Projects extends Component {
    render() {
        return (
            <div id='projects'>
                <h1 className='aboutH1'>Projects</h1>
                <div className='containerProjects'>
                    <div className='colP'>
                        <div ClassName='Card'>
                            <img src={picture} className='projectpic'
                                alt="Project"></img>
                            <h2>Project 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='colP'>
                        <div ClassName='Card'>
                            <img src={picture} className='projectpic'
                                alt="Project 2"></img>
                            <h2>Project 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='colP'>
                        <div ClassName='Card'>
                            <img src={picture} className='projectpic'
                                alt="Project 3"></img>
                            <h2>Project 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;