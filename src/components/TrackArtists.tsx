import { Artist } from './model';

interface TrackArtistsProps {
    artists: Artist[];
}

const TrackArtists = ({ artists }: TrackArtistsProps) => {
    return (
        <span>
            {artists.map((artist) => (
                <span key={artist.id} className="artistName">
                    {artist.name}
                </span>
            ))}
        </span>
    );
};

export default TrackArtists;
