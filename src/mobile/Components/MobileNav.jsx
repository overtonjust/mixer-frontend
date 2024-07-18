// Dependencies
import React from 'react';
import '../../Styles/MobileNav.css'
import { Link } from 'react-router-dom';
import { FaMicrophoneAlt } from "react-icons/fa";
import record_player from "../../assets/record_player.svg";

const MobileNav = () => {
    return (
        <div className='mobile-nav'>
                <Link className='mobile-nav-logo' to="/">
                    <FaMicrophoneAlt className="logo"/>
                    <h1>Mixer</h1>
                </Link>
                <button className='mobile-nav-button'>Add To Library</button>
        </div>
    );
};

export default MobileNav;