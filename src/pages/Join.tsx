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
        axios.get(url).then(() => {
            localStorage.setItem('party_id', partyId ? partyId : '');
            idIsValid = true;
            window.location.href = '/jukebox';
        });
    }
    if (!idIsValid) {
        return (
            <>
                <div className="failText">INVALID PARTY ID</div>
            </>
        );
    }
    return <></>;
};

export default Join;
