// Dependencies
import { useState, useEffect } from "react";
import { convertSecondsToTimeStr, genreImages } from "../utils/utils";
import "../Styles/Index.css";

export default function Index({genreOption}){
    const [songList, setSongList] = useState([]);
    const [favoritesList, setFavoritesList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const API = import.meta.env.VITE_API;

    useEffect(()=> {
        fetch(API)
            .then(res => res.json())
            .then(res => setSongList((prevState) => res))
            .catch(err => console.error(err))
    },[songList]);

    useEffect(() => {
        if(genreOption === 'All Songs') {
            setFilteredList(songList)
            setFavoritesList((prevState) => {
                const favoriteSongs = songList.filter((song) => song.is_favorite)
                return favoriteSongs;
            })
        } else {
            setFilteredList((prevState) => {
                const filteredSongs = songList.filter((song) => genreOption === song.genre);
                return filteredSongs;
            })
            setFavoritesList((prevState) => {
                const favoriteSongs = filteredList.filter((song) => song.is_favorite)
                return favoriteSongs;
            })
        }
        
    },[songList, genreOption])
    
    return(
        <main className="dashboard">
            <header className="dashboard-header">
                <div className="dashboard-header-box">
                    <img className="dashboard-img" src={genreImages[genreOption]} alt="Genre image" />
                    <div className="dashboard-header-title">
                        <h2>{genreOption}</h2>
                        <p>{filteredList.length} {filteredList.length > 1 ? 'Songs': 'Song'}</p>
                        <p>{favoritesList.length} Favorited</p>
                    </div>
                </div>
                <button className="dashboard-header-button">
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </header>
            {filteredList.length > 0 ? 
                <section className="dashboard-table">
                    <header className="dashboard-table-headers">
                        <p className="dashboard-table-header">Name</p>
                        <p className="dashboard-table-header">Artist</p>
                        <p className="dashboard-table-header">Album</p>
                        {genreOption === 'All Songs' && <p className="dashboard-table-header">Genre</p> }
                        <p className="dashboard-table-header">Time</p>
                    </header>
                    <article className='dashboard-list'>
                        {filteredList.map((song,index) => {
                            return (
                                <div className={index % 2  == 0 ? 'dashboard-table-row even-row': 'dashboard-table-row'} key={song.id}>
                                    <p className="dashboard-table-name">{song.name}</p>
                                    <p className="dashboard-table-data">{song.artist}</p>
                                    <p className="dashboard-table-data">{song.album}</p>
                                    {genreOption === 'All Songs' && <p className="dashboard-table-data">{song.genre}</p> }
                                    <p className="dashboard-table-time">{convertSecondsToTimeStr(song.time_in_seconds)}</p>
                                </div>
                            )
                        }) }
                    </article>
                </section>
                : <div>No songs found that are {genreOption}</div> }
        </main>
    )
}