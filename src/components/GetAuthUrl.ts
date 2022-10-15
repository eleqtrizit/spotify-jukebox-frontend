import axios from 'axios';
import { AuthUrl } from './model';

export function GetAuthUrl() {
    const AuthUrl = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth_url`);
        const resData = res.data as AuthUrl;
        console.log(resData.auth_url);
        return resData;
    };

    return [AuthUrl] as const;
}
