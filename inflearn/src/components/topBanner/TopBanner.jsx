import React from 'react';
import TopBannerMenu from './TopBannerMenu';
import TopBannerWrapper from './TopBannerWrapper';

function TopBanner(props) {
    return (
        <section className='top-banner'>
            <TopBannerWrapper/>
            <TopBannerMenu/>
        </section>
    );
}

export default TopBanner;