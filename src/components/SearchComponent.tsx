import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Artist, Track, Album } from './model';
import TrackListing from './TrackListing';

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
            searchQuery = searchQuery ? searchQuery : ' ';
            const partyId = localStorage.getItem('party_id');
            const res = await axios.get('http://localhost:8000/search/' + searchQuery + '/' + partyId);
            setArtists(res.data.artists);
            setTracks(res.data.tracks);
            setAlbums(res.data.albums);
        } catch (error) {
            console.log(error);
        }
    };

    const listTracks = (tracks: Track[]) => {
        if (tracks.length > 0) {
            return (
                <div>
                    <div className="searchTitle">Tracks</div>
                    <TrackListing tracks={tracks} />
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
                                <div className="artistListing">
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
                                <div className="artistListing">
                                    <img src={artist.image} height="150px" width="150px" alt="" />
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
