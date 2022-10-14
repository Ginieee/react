import React from 'react';
import TopNavDesktop from './TopNavDesktop';
import TopNavMobile from './TopNavMobile';

function TopNav(props) {

    return (
        <header id='header'>
            <nav className='navbar'>
                <TopNavDesktop/>
            </nav>
        </header>
    );
}

export default TopNav;