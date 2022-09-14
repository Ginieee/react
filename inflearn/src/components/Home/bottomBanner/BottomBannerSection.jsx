import React from 'react';
import {bottomBannerData} from 'data/Home/bottomBanner/bottomBannerData'
import BottomBannerCard from './BottomBannerCard';

function BottomBannerSection(props) {
    return (
        <section className='bottom_banner_box'>
            <div className='bottom_banner_container'>
                <div className='bottom_banner_wrapper'>
                    {
                        bottomBannerData.map((item) => {
                            return(
                                <BottomBannerCard
                                background_img={item.background_img}
                                title_color={item.title_color}
                                title={item.title}
                                href={item.href}
                                text={item.text}
                                />
                            );
                        })
                    }
                </div>

            </div>
        </section>
    );
}

export default BottomBannerSection;