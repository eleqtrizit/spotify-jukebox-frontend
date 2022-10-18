import React from 'react';
import { GetAuthUrl } from '../components/GetAuthUrl';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const [auth_url] = GetAuthUrl();

    function goToAuth() {
        auth_url().then((url) => {
            url.auth_url = url.auth_url.replace('8000', '3000');
            window.location.href = url.auth_url;
        });
    }

    return (
        <>
            <div className="logo clickable" onClick={() => goToAuth()}>
                <span className="startParty">START JUKEBOX</span>
            </div>
            {/* <div>
                <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button>
            </div> */}
        </>
    );
};

export default HomePage;
