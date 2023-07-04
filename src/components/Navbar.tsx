import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import logo from "../assets/logonav.png";
// declare module "*.svg"
import pdf from "../assets/resume.pdf";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="filter-elements">
                    {/* <div className="all">
                        <div className="filter-text">all</div>
                    </div> */}
                    <div className="design">
                        <div className="filter-text">design</div>
                    </div>
                    <div className="illustration">
                        <div className="filter-text">illustration</div>
                    </div>
                </div>
                <div className="logo">
                        {/* <Link to="/"><Logo /></Link> */}
                        <img src={logo} alt="" className="logo-nav"/>

                </div>
                <div className="nav-elements">
                    <div className="nav-element about">
                        <Link to="/about">
                            <div className="nav-text">about</div>
                        </Link>
                    </div>
                    <div className="nav-element resume">
                        {/* <Link to="/"> */}
                            <div className="nav-text">
                                <a href={pdf} target="_blank">
                                    resume
                                    </a>
                            </div>
                        {/* </Link> */}
                    </div>
                    <div className="nav-element portfolio">
                    <Link to="/"><div className="nav-text">portfolio</div></Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;