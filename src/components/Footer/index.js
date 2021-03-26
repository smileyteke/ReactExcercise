import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

export default function Footer(){
    function goTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <footer id="footer">
        <span onClick={goTop}>&copy; Izzy<span className="highlight">DEV</span> | 2021</span>
        <ul id="footer-links">
            <li>
                <a
                href="https://github.com/smileyteke"
                id="github-icon"
                target="_blank"
                title="Github"
                alt="github"
                rel="noopener noreferrer"
                ><FontAwesomeIcon icon={faGithub} />
                </a>
            </li>            
           
            <li>
                <a
                href="https://www.linkedin.com/in/ismail-teke-47b4a81b3/"
                id="linkedin-icon"
                target="_blank"
                title="Linkedin"
                alt="linkedin"
                rel="noopener noreferrer"
                ><FontAwesomeIcon icon={faLinkedin} /></a>    
            </li>

        </ul>
      </footer>
    );
}