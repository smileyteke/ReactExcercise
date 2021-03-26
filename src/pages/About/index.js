import React from 'react';
import Box from '../../components/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
 import Slideshow from '../../components/Slideshow';

import './styles.css';

export default function About(){
    return (
        <>
        <Box color="#e5e5e5" bgColor="#421567" title="Ismail Teke" column >
            <div className="bio-container">
                <img src="./assets/dev.jpg" alt="dev" id="dev-pic" title="Ismail"/>
                <div className="bio-text">
                    <p id="bio">
                    My name is Ismail,in my free time I like to build beautiful websites and mobile applications just for fun.<br/>
                   <span className="italic"></span>My hobbies are playing soccer, learning new stuff,
                   reading useful books. 			
                    </p><br/>
                    <p>smileyteke@hotmail.com</p>
                    <p>ismailteke887@gmail.com</p>


            <br></br>
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
                </div>
            </div>
        </Box>
        { <Box title="Gallery">
            <Slideshow
                interval={3000}
                images={[
                    './assets/slideshow/web1.png',
                    './assets/slideshow/web2.png',
                    './assets/slideshow/web3.png',
                    './assets/slideshow/logo.jpg',
                    './assets/slideshow/p1.jpg',
                    './assets/slideshow/web6.png',
                    './assets/slideshow/web1.png',
                    './assets/slideshow/web2.png',
                    './assets/slideshow/web3.png',
                    './assets/slideshow/logo.jpg',
                   
                ]}
            />
        </Box> }
        </>
    )
}