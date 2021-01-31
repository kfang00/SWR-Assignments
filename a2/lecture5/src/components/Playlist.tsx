import React, { ChangeEvent, useState } from 'react';
import Song from './Song';

type Info = {
    title: string,
    artist: string
};

const Playlist = () => {
    const [songs, setSongs] = useState<Info[]>([]);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const changeArtist = (event: ChangeEvent<HTMLInputElement>) => {
        setArtist(event.currentTarget.value);
    }
    const submitHandler = (event: any) => {
        event.preventDefault();
        setSongs((prev) => [...prev, {
            title: title,
            artist: artist
        }]);
    }

    const removeHandler = (event: any, index: number) => {
        event.preventDefault();
        let songList = [...songs]
        songList.splice(index,1)
        setSongs(songList);
    }
    return (
        <div id = "playlist-body">
            <h1>- Playlist - </h1>
            {songs.map((song, index) => (
                <div className = "playlist-song">
                    <Song info= {song} />
                    <div className = "playlist-remove">
                        <label htmlFor = "remove">Remove: </label>
                        <input 
                            type = "checkbox"
                            name = "remove"
                            onClick = {(event) => removeHandler(event, index)}
                        />
                    </div>
                </div>
            ))}
            <h2 id = "playlist-form-title">Add A Song</h2>
            <form onSubmit = {submitHandler} id = "playlist-form">
                <label htmlFor = "title">Title: </label>
                <input 
                    type = "text" 
                    name = "title" 
                    value = {title}
                    onChange = {changeTitle}/>
                <label htmlFor = "artist">Artist: </label>
                <input 
                    type = "text" 
                    name = "artist"
                    value = {artist}
                    onChange = {changeArtist} />
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
};

export default Playlist;