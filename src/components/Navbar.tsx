import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
declare module "*.svg"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                    <Link to="/"><Logo /></Link>

            </div>
            <div className="nav-elements">
                <div className="nav-element about">
                    <Link to="/about">
                        <button>
                            about
                            </button>
                    </Link>
                </div>
                <div className="nav-element portfolio">
                <Link to="/"><button>portfolio</button></Link>
                </div>
                <div className="nav-element resume">
                    <Link to="/"><button>resume</button></Link>
                </div>
            </div>
            <div className="social-elements"></div>
        </div>
    )
}

export default Navbar;