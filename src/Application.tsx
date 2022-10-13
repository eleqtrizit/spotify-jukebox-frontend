import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/Layout';
import AboutPage from './pages/About';
import Callback from './pages/Callback';
import HomePage from './pages/Home';
import Jukebox from './pages/Jukebox';
import Search from './pages/Search';
import TestPage from './pages/Test';

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
                    <Route path="about">
                        <Route index element={<AboutPage />} />
                        <Route path=":number" element={<AboutPage />} />
                    </Route>
                    <Route path="test" element={<TestPage />} />
                    <Route path="layout" element={<LayoutComponent />}>
                        <Route index element={<AboutPage />} />
                        <Route path=":number" element={<AboutPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Application;
