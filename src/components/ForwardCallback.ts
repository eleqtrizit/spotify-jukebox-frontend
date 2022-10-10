import axios from 'axios';
import { PartyId } from './model';

var codes: { [code: string]: boolean } = {};

const ForwardCallback = (code: string | null) => {
    const callback = async () => {
        const res = await axios.get(`http://localhost:8000/callback?code=${code}`);
        const resData = res.data as PartyId;
        console.log(resData.party_id);
        localStorage.setItem('party_id', resData.party_id);
        window.location.href = 'http://localhost:3000/jukebox';
    };
    if (code && !(code in codes)) {
        codes[code] = true;
        callback();
    }
};

export default ForwardCallback;
