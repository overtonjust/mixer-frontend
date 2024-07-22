import "../Styles/Show.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import song_not_found from "../assets/never-gonna-give-you-up.gif";
import default_album_art from "../assets/default_album_art.png";
import Form from "../Components/Form";
import { FaTrashAlt } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { IoMenu } from "react-icons/io5";

const API = import.meta.env.VITE_API;

export default function Show(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [videoID, setVideoID] = useState("qvmP6PbC1JQ");
    const [song, setSong] = useState({
        name: "Song Not Found...",
        is_favorite: true,
        image: song_not_found
    });

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
        .then(response => response.json())
        .then(response => {
            if (response.error) response = song;
            setSong(response)
            setVideoID(response.audio_url.split("?v=")[1])
        })
        .catch(error => console.error(error))
    },[]);

    const handleDelete = () => {
        fetch(`${API}/songs/${song.id}`, { method: "DELETE" })
        .then(() => navigate("/songs"))
        .catch((error) => console.error(error));
    };

    const mobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    return(
        <>
        <div className="Show">
            {!mobile ? <>
                {showForm ? <Form song={song}/>:null}
                <h1>{song.name || default_album_art}</h1>
                <hr/>
                <div className="show-details">
                    <img src={song.image || default_album_art} alt="Album Art" />
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
                                <div onClick={song.id ? () => setShowForm(true) : null} className="edit-song-button circle"><span className="edit-song-button-ellipsis">...</span></div>
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
            </>
            :
            <>
            <div className="mobile-show-container">
                {showForm ? <Form song={song}/>:null}
                <img src={song.image || default_album_art}/>
                <iframe
                            id="ytplayer" 
                            type="text/html"
                            allowFullScreen
                            src={`https://www.youtube.com/embed/${videoID}`}
                ></iframe>
                <div className="mobile-show-details">
                    <h1>{song.name}</h1>
                    <h2>{song.artist}</h2>
                    <div className="circle">
                        {song.is_favorite ? 
                            <i className="fa-solid fa-heart"></i>
                        :
                            <i className="fa-regular fa-heart"></i>
                        }
                    </div>
                    <div className="buttons">
                        <div onClick={() => setConfirmDelete(true)} className="mobile-delete"><FaTrashAlt /></div>
                        <div onClick={song.id ? () => setShowForm(true) : null} className="mobile-edit"><IoMenu /></div>
                    </div>
                </div>
            </div>
            </>
            }
        </div>
        {confirmDelete ? 
            <div className="greyed-out">
                <div className="popup">
                    <h2>
                        Confirm Delete
                        <p>Are you sure?<br/>This action cannot be undone</p>
                    </h2>
                    <div>
                        <button onClick={() => handleDelete()}>Delete</button>
                        <button onClick={() => setConfirmDelete(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        :null}
        </>
    )
}