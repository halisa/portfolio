import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export const openInNewTab = (url: string | URL | undefined) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

const Footer = () => {
    return(
        
        <div className="footer-container">
            <div className="social-icons">
                <a href="https://github.com/halisa" target="_blank" >
                    <IconContext.Provider value={{ color: '#E90063', size: '20px' }}>
                        <TbBrandGithub />
                    </IconContext.Provider>
                </a>
                <a href="mailto:lh.halisa@gmail.com">
                    <IconContext.Provider value={{ color: '#E90063', size: '20px' }}>
                        <HiOutlineMail />
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/lisa-ha24/" target="_blank" >
                    <IconContext.Provider value={{ color: '#E90063', size: '20px' }}>
                        <RiLinkedinFill />
                    </IconContext.Provider>
                </a>
            </div>
            <p className="footer-text">made with ♥ by lisa ha 2022</p>
            <p className="footer-archive">archive</p>
        </div>
    
        )
}

export default Footer;