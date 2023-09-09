import githubLogo from "../img/github-mark.svg";
import linkedinLogo from "../img/linkedinlogo.svg";
import emailIcon from "../img/email.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <a href={"//www.linkedin.com/in/ana-edwards-135b0928a"} target='_blank'><img src={linkedinLogo}/></a>
                <a href={"//https://github.com/ae1910"} target='_blank'><img src={githubLogo}/></a>
                <a href={"mailto:aedwards.bu@gmail.com"} target='_blank'><img src={emailIcon}/></a>
            </div>
        </div>
    );
};

export default Footer;