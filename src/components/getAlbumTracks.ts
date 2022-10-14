import axios from 'axios';

export async function getAlbumTracks(albumId: string) {
    const partyId = localStorage.getItem('party_id');
    let url: string = `{process.env.REACT_APP_SERVER_URL}/album/tracks/${albumId}/${partyId}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
