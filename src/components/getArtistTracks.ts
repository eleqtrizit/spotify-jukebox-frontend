import axios from 'axios';

export async function getArtistTracks(artistId: string) {
    const partyId = localStorage.getItem('party_id');
    let url: string = `${process.env.REACT_APP_SERVER_URL}/artist/tracks/${artistId}/${partyId}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
