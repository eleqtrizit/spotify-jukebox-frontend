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
                    {artist.name} {artist !== artists[artists.length - 1] ? ', ' : ''}
                </span>
            ))}
        </span>
    );
};

export default TrackArtists;
