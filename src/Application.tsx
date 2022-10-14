import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Callback from './pages/Callback';
import HomePage from './pages/Home';
import Jukebox from './pages/Jukebox';
import Search from './pages/Search';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <div className="page">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="callback" element={<Callback />} />
                    <Route path="jukebox" element={<Jukebox />} />
                    <Route path="search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Application;
