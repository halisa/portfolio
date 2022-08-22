import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
    return(
        <div className="footer-container">
            <p className="footer-text">made with ♥ by lisa ha 2022</p>
            <div className="social-icons">
                <TbBrandGithub />
                <HiOutlineMail />
                <RiLinkedinFill />
            </div>
        </div>
    
        )
}

export default Footer;