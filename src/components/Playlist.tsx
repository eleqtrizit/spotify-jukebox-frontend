import { useEffect, useRef, useState } from 'react';
import { Track } from './model';
import TrackArtists from './TrackArtists';

// https://stackoverflow.com/questions/71936110/correct-way-of-connecting-websocket-events-to-update-my-react-component

const Playlist = () => {
    const [serverMessage, setServerMessage] = useState('');
    const [webSocketReady, setWebSocketReady] = useState(false);
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        let webSocket = new WebSocket('ws://127.0.0.1:8000/ws_playlist_tracks/' + localStorage.party_id);

        // if (window.performance) {
        //     if (webSocketReady && performance.navigation.type === 1) {
        //         console.log('This page is reloaded');
        //         webSocket.close();
        //         setWebSocketReady(false);
        //         webSocket = new WebSocket('ws://127.0.0.1:8000/ws_playlist_tracks/' + localStorage.party_id);
        //         setWebSocketReady(true);
        //     }
        // }

        webSocket.onopen = (event) => {
            setWebSocketReady(true);
            webSocket.send('start');
        };

        webSocket.onmessage = function (event) {
            setServerMessage(JSON.parse(event.data));
            let data = JSON.parse(event.data);
            if (!('type' in data) && !('no_change' in data)) {
                setTracks(data);
            } else {
                console.log('no change');
            }
        };

        webSocket.onclose = function (event) {
            setWebSocketReady(false);
            webSocket.close();
        };

        webSocket.onerror = function (err) {
            console.log('Socket encountered error');
            setWebSocketReady(false);
            webSocket.close();
            webSocket = new WebSocket('ws://127.0.0.1:8000/ws_playlist_tracks/' + localStorage.party_id);
            setWebSocketReady(true);
        };

        return () => {
            webSocket.close();
        };
    }, []);

    if (!webSocketReady) {
        return <h1>Connecting...</h1>;
    } else if (serverMessage === '') {
        return <h1>Loading playlist ...</h1>;
    } else {
        if (tracks.length === 0) {
            return (
                <div>
                    <h1>Jukebox</h1>
                    <h2>Playlist is empty</h2>
                </div>
            );
        } else {
            return (
                <>
                    <h1>Jukebox</h1>
                    <div className="playlist_table">
                        {tracks.map((track) => (
                            <div className="track" key={track.id}>
                                <div className="name">{track.name}</div>
                                <TrackArtists artists={track.artists} />
                            </div>
                        ))}
                    </div>
                </>
            );
        }
    }
};

export default Playlist;
