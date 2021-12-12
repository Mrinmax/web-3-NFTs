import React from 'react';
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import darkMode from "../assets/header/theme-switch.png";

function Header() {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={punkLogo} className="punkLogo" alt="" />
            </div>

            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="" />
                </div>
                <input type="text" className="searchInput" placeholder="Search"/>
            </div>

            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="headerActions">
                <div className="darkMode">
                    <img src={darkMode} alt="" />
                </div>
            </div>

            <div className="loginButton">GET IN</div>
        </div>
    )
}

export default Header;
