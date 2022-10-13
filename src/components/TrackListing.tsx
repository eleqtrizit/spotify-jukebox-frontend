import { Track } from './model';
import TrackArtists from './TrackArtists';

interface Tracks {
    tracks: Track[];
}

const TrackListing = ({ tracks }: Tracks) => {
    return (
        <table className="playlist_table">
            <tbody>
                {tracks.map((track) => (
                    <tr className="trackListing" key={track.id}>
                        <td className="albumImage">
                            <img src={track.album.image} alt="album art" width="75" height="75" />
                        </td>
                        <td className="track">
                            {track.name}
                            <br />
                            <TrackArtists artists={track.artists} />
                            <br />
                            <span className="album">{track.album.name}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TrackListing;
