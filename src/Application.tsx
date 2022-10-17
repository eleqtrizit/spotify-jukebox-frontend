import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './pages/Join';
import Callback from './pages/Callback';
import HomePage from './pages/Home';
import Jukebox from './pages/Jukebox';
import Search from './pages/Search';
import Share from './pages/Share';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <div className="page">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="exec_callback" element={<Callback />} />
                    <Route path="jukebox" element={<Jukebox />} />
                    <Route path="jukebox/:partyId" element={<Jukebox />} />
                    <Route path="search" element={<Search />} />
                    <Route path="share" element={<Share />} />
                    <Route path="join" element={<Join />} />
                    <Route path="join/:partyId" element={<Join />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Application;
