import React from 'react';
import {topBannerData} from 'data/Home/topBanner/topBannerData';
import TopBannerContent from './TopBannerContent';

function TopBannerWrapper() {
    return (
        <div className='swiper-container'>
            {
                topBannerData.map((item) => {
                    return(
                        <TopBannerContent
                        href={item.href}
                        backgroundColor={item.backgroundColor}
                        tag_color={item.tag_color}
                        tag_text={item.tag_text}
                        tag_backgroundColor={item.tag_backgroundColor}
                        title_text={item.title_text}
                        title_color={item.title_color}
                        text_color={item.text_color}
                        text_text={item.text_text}
                        img_src={item.img_src}
                        img_alt={item.img_alt}
                        />
                    );
                })
            }
        </div>
    );
}

export default TopBannerWrapper;