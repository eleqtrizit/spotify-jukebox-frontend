import { Artist } from './model';

interface TrackArtistsProps {
    artists: Artist[];
    artistNameClass?: string;
}

const TrackArtists = ({ artists, artistNameClass }: TrackArtistsProps) => {
    if (artistNameClass === undefined) {
        artistNameClass = 'artistName';
    }
    return (
        <span>
            {artists.map((artist) => (
                <span key={artist.id} className={artistNameClass}>
                    {artist.name}
                </span>
            ))}
        </span>
    );
};

export default TrackArtists;
