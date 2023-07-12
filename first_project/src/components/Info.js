import logo from '../images/selfie.png';
import mail_icon from '../images/mail-icon.png';
import linkedin_icon from '../images/linkedin-icon.png';

function Info() {
    return (
        <div className='Info'>

            <img src={logo} height='400px' className='Photo'></img>
            <h1>Tadeáš Kachyňa</h1>
            <h4>Student@VUTFIT</h4>
            <button className='Button-Email' >
                <img src={mail_icon} width='20' className='Icon-Email'/>
                Email
            </button>
            <button className='Button-LinkedIn'>
                <img src={linkedin_icon} width='20' className='Icon-LinkedIn'/>
                LinkedIn
            </button>
            
        </div>
    );
}

export default Info;