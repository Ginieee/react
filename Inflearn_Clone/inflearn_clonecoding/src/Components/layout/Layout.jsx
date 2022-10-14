import Footer from 'Components/footer/Footer';
import Header from 'Components/header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}


export default Layout;