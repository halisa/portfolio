import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <h1>
                    <a href="./">Lisa Ha</a>
                </h1>
            </div>
            <div className="nav-elements">
                <div className="nav-element about">
                    <button>about</button>
                </div>
                <div className="nav-element portfolio">
                    <button>portfolio</button>
                </div>
                <div className="nav-element resume">
                    <button>resume</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;