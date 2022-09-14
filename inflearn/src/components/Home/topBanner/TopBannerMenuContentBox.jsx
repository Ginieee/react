import React from 'react';
import {topBannerMenuContentData} from 'data/Home/topBanner/topBannerMenuContentData'
import TopBannerMenuContent from './TopBannerMenuContent';

function TopBannerMenuContentBox(props) {
    return (
        <div className='top-banner-menu-content-box'>
            <div className='top-banner-menu-content-container'>
                {
                    topBannerMenuContentData.map((item) => {
                        return(
                            <TopBannerMenuContent
                            text={item.text}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TopBannerMenuContentBox;