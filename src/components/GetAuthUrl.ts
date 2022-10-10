import axios from 'axios';
import { AuthUrl } from './model';

export function GetAuthUrl() {
    const AuthUrl = async () => {
        const res = await axios.get('http://localhost:8000/auth_url');
        const resData = res.data as AuthUrl;
        console.log(resData.auth_url);
        return resData;
    };

    return [AuthUrl] as const;
}
