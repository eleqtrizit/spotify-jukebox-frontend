import { useEffect, useRef, useState } from 'react';
import { Track } from './model';
import TrackArtists from './TrackArtists';

const Playlist = () => {
    const [serverMessage, setServerMessage] = useState('');
    const [webSocketReady, setWebSocketReady] = useState(false);
    const [tracks, setTracks] = useState<Track[]>([]);

    const [webSocket, setWebSocket] = useState(
        new WebSocket('ws://127.0.0.1:8000/ws_playlist_tracks/' + localStorage.party_id)
    );

    useEffect(() => {
        webSocket.onopen = (event) => {
            setWebSocketReady(true);
            webSocket.send('start');
        };

        webSocket.onmessage = function (event) {
            setServerMessage(JSON.parse(event.data));
            let data = JSON.parse(event.data);
            console.log('set tracks');
            setTracks(data);
        };

        webSocket.onclose = function (event) {
            setWebSocketReady(false);
            setTimeout(() => {
                setWebSocket(new WebSocket('ws://127.0.0.1:3000/ws'));
            }, 1000);
        };

        webSocket.onerror = function (err) {
            console.log('Socket encountered error');
            setWebSocketReady(false);
            webSocket.close();
        };

        return () => {
            webSocket.close();
        };
    }, [webSocket]);

    if (!webSocketReady) {
        return <h1>Loading playlist ...</h1>;
    } else if (serverMessage == '') {
        return <h1>Loading playlist ...</h1>;
    } else {
        return (
            <>
                <h1>Jukebox</h1>
                <div>
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
};

export default Playlist;
