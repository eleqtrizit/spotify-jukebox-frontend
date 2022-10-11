import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Playlist from '../components/Playlist';

export interface IAboutPageProps {}

const Jukebox: React.FunctionComponent<IAboutPageProps> = (props) => {
    return (
        <>
            <div>
                <Playlist />
            </div>
        </>
    );
};

export default Jukebox;
