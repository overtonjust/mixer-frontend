// Dependencies
import { useState, useEffect } from "react";
import { capitalize, convertSecondsToTimeStr } from "../utils/utils";
import "../Styles/Index.css";

export default function Index(){
    const [songList, setSongList] = useState([]);
    const [favoritesList, setFavoritesList] = useState([])

    const API = import.meta.env.VITE_API;

    useEffect(()=> {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                
                setSongList((prevState) => res)
                setFavoritesList((prevState) => {
                    const favoriteSongs = songList.filter((song) => song.is_favorite)
                    return favoriteSongs
                })
            })
            .catch(err => console.error(err))
    },[songList])

    
    return(
        <main>
            <header>
                <img src="https://placehold.co/200x200" alt="Genre image" />
                <div>
                    <h2>genre</h2>
                    <p>{songList.length} {songList.length > 1 ? 'Songs': 'Song'}</p>
                    <p>{favoritesList.length} favorited</p>
                </div>
                <button>
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </header>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Time</th>
                </tr>
                {songList.map((song,index) => {
                    return (
                        <tr key={song.id}>
                            <td>{song.name}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{capitalize(song.genre)}</td>
                            <td>{convertSecondsToTimeStr(song.time_in_seconds)}</td>
                        </tr>
                    )
                })}
            </table>
        </main>
    )
}