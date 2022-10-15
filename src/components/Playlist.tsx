import axios from 'axios';
import { Dispatch, useEffect, useState } from 'react';
import { Track } from './model';
import TrackListing from './TrackListing';

const getPlaylist = async (setTracks: Dispatch<React.SetStateAction<Track[]>>) => {
    let url: string = `${process.env.REACT_APP_SERVER_URL}/playlist_tracks/${localStorage.party_id}`;
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
            <TrackListing tracks={tracks} />
        </>
    );
};

export default Playlist;
