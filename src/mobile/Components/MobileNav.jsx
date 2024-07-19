// Dependencies
import React from 'react';
import { useState } from "react";
import '../../Styles/MobileNav.css'
import { Link } from 'react-router-dom';
import Form from '../../Components/Form';
import { FaMicrophoneAlt } from "react-icons/fa";

const MobileNav = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='mobile-nav'>
                {showForm ? <Form />:null}
                <Link className='mobile-nav-logo' to="/">
                    <FaMicrophoneAlt className="logo"/>
                    <h1>Mixer</h1>
                </Link>
                <button onClick={() => setShowForm(true)} className='mobile-nav-button'>Add To Library</button>
        </div>
    );
};

export default MobileNav;