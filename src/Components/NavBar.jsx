import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import { TbPiano } from "react-icons/tb";
import { FaMicrophoneAlt } from "react-icons/fa";
import { TbGuitarPickFilled } from "react-icons/tb";
import { PiMicrophoneStageFill } from "react-icons/pi";

export default function NavBar({setGenreOption}){
    return (
        <nav>
            <div className="nav-main">
                <Link to="/">
                    <h1>
                        <FaMicrophoneAlt className="logo" />
                        Mixer
                    </h1>
                </Link>
                <div className="new-song-button">Add To Library</div>
                <div className="genres-container">
                    <div onClick={() => setGenreOption('All Songs')} className="genre">
                        <i className="fa-solid fa-earth-americas"></i>
                        All
                    </div>
                    <div onClick={() => setGenreOption('Alternative')} className="genre">
                        <TbPiano className="i kb" />
                        Alternative
                    </div>
                    <div onClick={() => setGenreOption('Country')} className="genre">
                        <i className="fa-solid fa-hat-cowboy country"></i>
                        Country
                    </div>
                    <div onClick={() => setGenreOption('Hip-Hop/Rap')} className="genre">
                        <i className="fa-solid fa-headphones"></i>
                        Hip-Hop/Rap
                    </div>
                    <div onClick={() => setGenreOption('Latin')} className="genre">
                        <i className="fa-solid fa-pepper-hot"></i>
                        Latin
                    </div>
                    <div onClick={() => setGenreOption('Pop/K-Pop')} className="genre">
                        <PiMicrophoneStageFill className="i" />
                        Pop/K-Pop
                    </div>
                    <div onClick={() => setGenreOption('Rock/Metal')} className="genre">
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