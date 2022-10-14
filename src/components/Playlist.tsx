import axios from 'axios';
import { Dispatch, useEffect, useRef, useState } from 'react';
import { Track } from './model';
import TrackListing from './TrackListing';

const getPlaylist = async (setTracks: Dispatch<React.SetStateAction<Track[]>>) => {
    let url: string = `${process.env.REACT_APP_WS_URL}/ws_playlist_tracks/${localStorage.party_id}`;
    try {
        console.log('getting playlist');
        axios.get(url).then((res) => {
            setTracks(res.data);
        });
    } catch (error) {
        console.log(error);
    }
};

const Playlist = () => {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        getPlaylist(setTracks);
        setInterval(() => {
            getPlaylist(setTracks);
        }, 2500);
    }, []);

    return (
        <>
            <h1>Jukebox</h1>
            <TrackListing tracks={tracks} />
        </>
    );
};

export default Playlist;
