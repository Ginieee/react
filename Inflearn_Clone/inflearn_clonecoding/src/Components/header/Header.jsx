import React from 'react';
import BottomNav from './BottomNav/BottomNav';
import TopLink from './topLink/TopLink';
import TopNav from './topNav/TopNav';

function Header(props) {
    return (
        <>
        <BottomNav/>
        <TopLink/>
        <TopNav/>
        </>
    );
}

export default Header;