// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import record_player from "../../assets/record_player.svg";
import '../../Styles/MobileNav.css'

const MobileNav = () => {
    return (
        <div className='mobile-nav'>
                <Link className='mobile-nav-logo' to="/">
                    <img className='mobile-nav-icon' src={record_player} alt="Pursuit Logo"/>
                    <h1>Mixer</h1>
                </Link>
                <button className='mobile-nav-button'>Add To Library</button>
        </div>
    );
};

export default MobileNav;