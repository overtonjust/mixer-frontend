import "../Styles/NavBar.css";
import { useState } from "react";
import Form from "../Components/Form";
import { Link, useNavigate } from "react-router-dom";
import { TbPiano } from "react-icons/tb";
import { FaMicrophoneAlt } from "react-icons/fa";
import { TbGuitarPickFilled } from "react-icons/tb";
import { PiMicrophoneStageFill } from "react-icons/pi";

export default function NavBar({setGenreOption, showForm, setShowForm}){
    const navigate = useNavigate();

    const handleGenreChange = (genre) => {
        navigate('/songs');
        setGenreOption(genre);
    };

    return (
        <nav>
            {showForm ? <Form />:null}
            <div className="nav-main">
                <Link to="/">
                    <h1>
                        <FaMicrophoneAlt className="logo" />
                        Mixer
                    </h1>
                </Link>
                <div onClick={() => setShowForm(true)} className="new-song-button">Add To Library</div>
                <div className="genres-container">
                    <div onClick={() => handleGenreChange('All Songs')} className="genre">
                        <i className="fa-solid fa-earth-americas"></i>
                        All
                    </div>
                    <div onClick={() => handleGenreChange('Alternative')} className="genre">
                        <TbPiano className="i kb" />
                        Alternative
                    </div>
                    <div onClick={() => handleGenreChange('Country')} className="genre">
                        <i className="fa-solid fa-hat-cowboy country"></i>
                        Country
                    </div>
                    <div onClick={() => handleGenreChange('Hip-Hop/Rap')} className="genre">
                        <i className="fa-solid fa-headphones"></i>
                        Hip-Hop/Rap
                    </div>
                    <div onClick={() => handleGenreChange('Latin')} className="genre">
                        <i className="fa-solid fa-pepper-hot"></i>
                        Latin
                    </div>
                    <div onClick={() => handleGenreChange('Pop/K-Pop')} className="genre">
                        <PiMicrophoneStageFill className="i" />
                        Pop/K-Pop
                    </div>
                    <div onClick={() => handleGenreChange('Rock/Metal')} className="genre">
                        <TbGuitarPickFilled className="i"/>
                        Rock/Metal
                    </div>
                </div>
            </div>
            <footer>
                <a target="_blank" href="https://github.com/overtonjust/mixer-frontend">
                    GitHub Repo
                    <i className="fa-solid fa-arrow-up"></i>
                </a>
                <p>Contributors<br/><span>Justin Overton<br/>Nasheed Jeremiah</span></p>
            </footer>
        </nav>
    )
}