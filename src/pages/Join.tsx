import axios from 'axios';
import { useParams } from 'react-router-dom';
import isValidPartyId from '../components/isValidPartyId';

interface PartyProps {
    partyId?: string;
}

const Join = () => {
    let { partyId }: PartyProps = useParams();
    let idIsValid = false;
    if (partyId) {
        isValidPartyId(partyId || 'badId').then((res) => {
            idIsValid = res;
            console.log(idIsValid);

            if (idIsValid) {
                localStorage.party_id = partyId;
                window.location.href = '/jukebox/' + partyId;
            } else {
                localStorage.clear();
                window.location.href = '/invalid';
            }
        });
    } else {
        window.location.href = '/invalid';
    }
    return <></>;
};

export default Join;
