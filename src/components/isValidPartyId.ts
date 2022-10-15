import axios from 'axios';

const isValid = async (partyId: string) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/check/${partyId}`;
    const res = await axios.get(url);
    if (res.data.valid) {
        return true;
    }
    return false;
};

export default isValid;
