import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import './style.css';

const FooterComp = () => {
    return (
        <footer>
            <div className='d-flex justify-content-center align-items-center'>
                <a href="https://www.linkedin.com/in/justinas-pekarskis-112686182/" target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
                <a href="https://www.facebook.com/justinas.pekarskis" target='_blank' rel='noreferrer'><AiFillFacebook /></a>
                <a href="https://github.com/Ju5tina5" target='_blank' rel='noreferrer'><AiFillGithub /></a>
            </div>
            <p>&copy; 2022 Made by Justelis</p>
        </footer>
    );
};

export default FooterComp;