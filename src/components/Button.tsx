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

const Button = () => {
    return(
        
        <button>read slow</button>
    
        )
}

export default Button;