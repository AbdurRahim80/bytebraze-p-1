import React from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='h-20'>
                <Nav />
            </div>
            <div className='min-h-[calc(100vh-132px)]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;