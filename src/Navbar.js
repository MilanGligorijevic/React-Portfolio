import React, { useState } from "react";

import { Link } from "react-router-dom";

function Navbar(){

    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        if(theme === "light") setTheme("dark");
        else setTheme("light");
        document.querySelector("body").setAttribute('data-theme', `${theme}`);
    }


    return (
        <nav className="nav-bar">
            <div className="list-div">
            <ul className="list">
                <li className="list-item" id="list-item-one">
                    <Link to="/" className="item-link">
                        Projects
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/about" className="item-link">
                        About me
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/contact" className="item-link">
                        Contact
                    </Link>
                </li>
                <button className="light-mode-button" onClick={changeTheme}>
                    <div className="gg-sun">
                    </div>
                </button>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;