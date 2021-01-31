import React from 'react';

type Info = {
    title: string,
    artist: string
};

type Props = {readonly info: Info};

const Song = ({info}:Props) => {
    return (
        <div className = "song-body">
            <p className = "song-title">{info.title}</p>
            <p className = "song-artist">{info.artist}</p>
        </div>
    );
}

export default Song;