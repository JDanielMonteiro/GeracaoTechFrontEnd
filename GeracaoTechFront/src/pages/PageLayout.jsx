import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componets/header/Header';
import Footer from '../componets/footer/Footer';

const PageLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default PageLayout;