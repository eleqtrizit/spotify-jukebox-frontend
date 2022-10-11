import { Artist } from './model';

interface TrackArtistsProps {
    artists: Artist[];
}

const TrackArtists = ({ artists }: TrackArtistsProps) => {
    return (
        <>
            {artists.map((artist) => (
                <div className="artists" key={artist.id}>
                    <div className="name">{artist.name}</div>
                </div>
            ))}
        </>
    );
};

export default TrackArtists;
