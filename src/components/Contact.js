import React, { Component } from 'react';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";


class Contact extends Component {
    render() {
        return (
            <div id='contact'>
                <div className="containercontact">
                    <h1 className="contactH1">Contact Me</h1>
                    <a href="https://github.com/KariAndreah">
                        <FaGithub className='icons' />
                    </a>
                    <a href="https://www.instagram.com/hellokariburt/">
                        <FaInstagram className='icons' />
                    </a>
                    <a href="https://www.linkedin.com/in/hellokariburt/">
                        <FaLinkedin className='icons' />
                    </a>
                    <a href="mailto:kandreahburt@gmail.com">
                        <MdEmail className='icons' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;