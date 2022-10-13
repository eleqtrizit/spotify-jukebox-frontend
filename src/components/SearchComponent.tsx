import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { autocompleteSearch } from './autocompleteSearch';
import { Artist, Track, Album } from './model';
import TrackArtists from './TrackArtists';

const SearchComponent = () => {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [tracks, setTracks] = useState<Track[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const executeSearch = async (searchQuery: string) => {
        try {
            searchQuery = searchQuery.trim();
            searchQuery = searchQuery ? searchQuery : ' ';
            autocompleteSearch(searchQuery).then((res) => {
                if (res !== undefined) {
                    setArtists(res.artists);
                    setTracks(res.tracks);
                    setAlbums(res.albums);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const addTrack = async (trackId: string) => {
        try {
            const partyId = localStorage.getItem('party_id');
            const res = await axios.get('http://localhost:8000/add/' + trackId + '/' + partyId);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const listTracks = (tracks: Track[]) => {
        if (tracks.length > 0) {
            return (
                <div>
                    <div className="searchTitle">Tracks</div>

                    <table className="playlist_table">
                        <tbody>
                            {tracks.map((track) => (
                                <tr
                                    className="trackListing clickable"
                                    key={track.id}
                                    onClick={() => addTrack(track.uri)}
                                >
                                    <td className="albumImage">
                                        <img src={track.album.image} alt="album art" width="75" height="75" />
                                    </td>
                                    <td className="track">
                                        <span className="track">{track.name}</span>
                                        <br />
                                        <TrackArtists artists={track.artists} artistNameClass="artistNameSmall" />
                                        <br />
                                        <span className="album">{track.album.name}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        return <div></div>;
    };

    const listAlbums = (albums: Album[]) => {
        if (albums.length > 0) {
            return (
                <div className="albumSearchResults">
                    <div className="searchTitle">Albums</div>
                    <div className="gridWrapper">
                        {albums.map((album) => {
                            return (
                                <div className="artistListing" key={album.id}>
                                    <img src={album.image} height="150px" width="150px" alt="" />

                                    <br />
                                    {album.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
        return <div></div>;
    };

    const listArtists = (artists: Artist[]) => {
        if (artists.length > 0) {
            return (
                <div className="artistSearchResults">
                    <div className="searchTitle">Artists</div>
                    <div className="gridWrapper">
                        {artists.map((artist) => {
                            return (
                                <div className="artistListing" key={artist.id}>
                                    <div className="artistBg">
                                        <img src={artist.image} height="150px" width="150px" alt="" />
                                    </div>
                                    <br />
                                    {artist.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
        return <div></div>;
    };

    return (
        <>
            <div className="searchBar">
                <div className="flexbox">
                    <div className="search">
                        <div>
                            <input
                                type="text"
                                ref={inputRef}
                                placeholder="Artists, Songs or Albums"
                                required
                                onChange={(e) => executeSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {listTracks(tracks)}

            <div className="searchPadding"></div>
            {listArtists(artists)}

            <div className="searchPadding"></div>
            {listAlbums(albums)}
        </>
    );
};

export default SearchComponent;
