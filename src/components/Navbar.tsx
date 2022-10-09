import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
declare module "*.svg"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                        <Link to="/"><Logo /></Link>

                </div>
                <div className="nav-elements">
                    <div className="nav-element about">
                        <Link to="/about">
                            <div className="nav-text">about</div>
                        </Link>
                    </div>
                    <div className="nav-element resume">
                        <Link to="/"><div className="nav-text">resume</div></Link>
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