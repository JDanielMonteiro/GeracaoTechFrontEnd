import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componets/header/Header';
import Footer from '../componets/footer/Footer';

const Layout = () => {
    return (
        <div id="layout">
            <Header />                   
                <Outlet />           
            <Footer />
        </div>
    );
};
export default Layout;