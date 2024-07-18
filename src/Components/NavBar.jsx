import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import record_player from "../assets/record_player.svg";

export default function NavBar(){
    return (
        <nav>
            <div className="nav-main">
                <Link to="/">
                    <h1>
                        <img src={record_player} alt="Pursuit Logo"/>
                        Mixer
                    </h1>
                </Link>
                <div className="new-song-button">Add To Library</div>
                <div className="genres-container">
                    <div className="genre">
                        <i className="fa-solid fa-earth-americas"></i>
                        All
                    </div>
                    <div className="genre">
                        <i className="fa-regular fa-square"></i>
                        Alternative
                    </div>
                    <div className="genre">
                        <i className="fa-solid fa-hat-cowboy"></i>
                        Country
                    </div>
                    <div className="genre">
                        <i className="fa-solid fa-sack-dollar"></i>
                        Hip-Hip/Rap
                    </div>
                    <div className="genre">
                        <i className="fa-solid fa-pepper-hot"></i>
                        Latin
                    </div>
                    <div className="genre">
                        <i className="fa-regular fa-square"></i>
                        Pop/K-Pop
                    </div>
                    <div className="genre">
                        <i className="fa-solid fa-guitar"></i>
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