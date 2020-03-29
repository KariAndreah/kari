import React, { Component } from 'react';
import './Skills.css'
import { DiReact, DiCss3, DiGit, DiHtml5,DiJavascript1,} from "react-icons/di";





class Skills extends Component {
    render() {
        return (
            <div id='skills'>
                <div className='containerSkills'>
                    <h1 className='skillsH1'>Languages and Technologies</h1>
                </div>
                <div className ="icons">
                    <DiCss3 />
                    <DiHtml5 />
                    <DiJavascript1 />
                    <DiGit />
                    <DiReact />
                </div>
            </div >
        )
    }
}

export default Skills;
