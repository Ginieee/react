import React from 'react';
import TopBannerMenuBtn from './TopBannerMenuBtn';
import TopBannerMenuContentBox from './TopBannerMenuContentBox';
import TopBannerMenuMore from './TopBannerMenuMore';

function TopBannerMenu(props) {
    return (
        <div className='top-banner-menu'>
            <div className='top-banner-menu-container'>
                <TopBannerMenuBtn/>
                <div className='divider'></div>
                <TopBannerMenuContentBox/>
                <TopBannerMenuMore/>
            </div>
        </div>
    );
}

export default TopBannerMenu;