import "../Styles/Form.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form({song}){
    const [newSong, setNewSong] = useState(song);
    const genres = ["Alternative", "Country", "Hip-Hop/Rap", "Latin", "Pop/K-Pop", "Rock/Metal"];

    const handleTextChange = (event) => {
        setNewSong({...newSong, [event.target.id]: event.target.value});
    };

    const handleNumberChange = (event) => {
        setNewSong({...newSong, [event.target.id]: Number(event.target.value)});
    };

    const toggleFavorite = () => {
        setNewSong({...newSong, is_favorite: !newSong.is_favorite});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newSong);
    };

    return(
        <div className="form-background">
            <form onSubmit={handleSubmit}>
                <header>
                    <img src={newSong.image} alt="Album Art" />
                    <div className="old-details">
                        <h1>{newSong.name}</h1>
                        <h2>{newSong.artist}</h2>
                        <h2>{newSong.album}</h2>
                    </div>
                    <div className="circle" onClick={toggleFavorite}>
                        {newSong.is_favorite ? 
                            <i className="fa-solid fa-heart"></i>
                        :
                            <i className="fa-regular fa-heart"></i>
                        }
                    </div>
                </header>

                <div className="input-field">
                    <label htmlFor="name">name</label>
                    <input onChange={handleTextChange} id="name" type="text" value={newSong.name} />
                </div>

                <div className="input-field">
                    <label htmlFor="album">album</label>
                    <input onChange={handleTextChange} id="album" type="text" value={newSong.album} />
                </div>

                <div className="input-field">
                    <label htmlFor="artist">artist</label>
                    <input onChange={handleTextChange} id="artist" type="text" value={newSong.artist} />
                </div>

                <div className="input-field">
                    <label htmlFor="audio_url">video</label>
                    <input onChange={handleTextChange} id="audio_url" type="url" value={newSong.audio_url} />
                </div>

                <div className="input-field">
                    <label htmlFor="image">artwork</label>
                    <input onChange={handleTextChange} id="image" type="url" value={newSong.image} />
                </div>

                <div className="input-field select-field">
                    <label htmlFor="genre">genre</label>
                    <div className="select">
                        <select onChange={handleTextChange} value={newSong.genre} name="genre" id="genre">
                            {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                        </select>
                    </div>
                </div>

                <div className="input-field time-field">
                    <label htmlFor="time_in_seconds">duration</label>
                    <div className="time">
                        <input min="1" onChange={handleNumberChange} id="time_in_seconds" type="number" value={Number(newSong.time_in_seconds)} />
                    </div>
                </div>

                <div className="buttons">
                    {song.id ? <div className="delete-button">Delete</div> : <div className="delete-button"></div>}
                    <span>
                        <Link onClick={() => setShowForm(false)} >Cancel</Link>
                        <button>OK</button>
                    </span>
                </div>
            </form>
        </div>
    )
}