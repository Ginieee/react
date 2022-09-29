import BottomNav from 'components/bottomNavigation/BottomNav';
import TopInfo from 'components/header/topInfo/TopInfo';
import TopNav from 'components/header/topNav/TopNav';
import React from 'react';

function Header(props) {

    return (
        <div>
            <BottomNav/>
            <TopInfo/>
            <TopNav/>
        </div>
    );
}

export default Header;