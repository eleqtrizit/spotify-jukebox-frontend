import axios from 'axios';
import { useParams } from 'react-router-dom';

interface PartyProps {
    partyId?: string;
}

const Join = () => {
    let { partyId }: PartyProps = useParams();
    let idIsValid = false;
    if (partyId) {
        const url = `${process.env.REACT_APP_SERVER_URL}/check/${partyId}`;
        axios.get(url).then((res) => {
            if (res.data.valid) {
                localStorage.setItem('party_id', partyId ? partyId : '');
                idIsValid = true;
            }
            console.log(idIsValid);

            if (idIsValid) {
                window.location.href = '/jukebox/' + partyId;
            } else {
                window.location.href = '/invalid';
            }
        });
    } else {
        window.location.href = '/invalid';
    }
    return <></>;
};

export default Join;
