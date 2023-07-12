import TwitterIcon from '../images/twitter.png';
import IGIcon from '../images/instagram.png';
import GitHubIcon from '../images/github.png';
import FacebookIcon from '../images/facebook.png';

import React from "react"

export default function Footer() {
    return(
        <div className="footer">
           <img src={TwitterIcon} class='FooterIcon' height='20px' />
           <img src={FacebookIcon} class='FooterIcon'  height='20px' />
           <img src={IGIcon} class='FooterIcon'  height='20px' />
           <img src={GitHubIcon}class='FooterIcon'  height='20px'/>
        </div>
    )
}