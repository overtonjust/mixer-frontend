import "../Styles/Show.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import default_album_art from "../assets/default_album_art.png";

const API = import.meta.env.VITE_API;

export default function Show(){
    const {id} = useParams();
    const [videoID, setVideoID] = useState("qvmP6PbC1JQ");
    const [song, setSong] = useState({
        genre: "XD",
        is_favorite: false,
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/de/eb/63/deeb63c1-7bc0-9153-cfa3-fd9e4929aacf/4050538826562.jpg/1200x1200bb.jpg'
    });

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setSong(response)
            setVideoID(response.audio_url.split("?v=")[1])
        })
        .catch(error => console.error(error))
    },[]);

    return(
        <div className="Show">
            <h1>{song.name}</h1>
            <hr/>
            <div className="show-details">
                <img src={song.image} alt="Album Art" />
                <div className="more-details">
                    <div className="info">
                        <span>
                            <h2>{song.artist}</h2><h3>{song.album}</h3><h4>{song.genre}</h4>
                        </span>
                        <div className="circles">
                            <div className="circle">
                                {song.is_favorite ? 
                                    <i className="fa-solid fa-heart"></i>
                                :
                                    <i className="fa-regular fa-heart"></i>
                                }
                            </div>
                            <div className="edit-song-button circle"><span>...</span></div>
                        </div>
                    </div>
                    <hr/>
                    <iframe
                        id="ytplayer" 
                        type="text/html"
                        allowFullScreen
                        src={`https://www.youtube.com/embed/${videoID}`}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}