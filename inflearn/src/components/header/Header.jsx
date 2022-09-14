import TopInfo from 'components/header/topInfo/TopInfo';
import TopNav from 'components/header/topNav/TopNav';
import React from 'react';

function Header(props) {
    return (
        <div>
            <TopInfo/>
            <TopNav/>
        </div>
    );
}

export default Header;