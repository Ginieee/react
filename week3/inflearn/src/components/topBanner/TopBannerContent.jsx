import React from 'react';

function TopBannerContent({href, backgroundColor, tag_color, tag_text, tag_backgroundColor, title_text, title_color, text_color, text_text, img_src, img_alt }) {
    return (
        <a className="swiper-content-a top-banner-content" href={href}>
            <div className="swiper-content-slide" style={{backgroundColor : backgroundColor}}>
                <div className="container">
                    <div className="swiper-content-left">
                        <div className="swiper-tag">
                            <div style={{color : tag_color, backgroundColor : tag_backgroundColor}}>
                                {tag_text}
                            </div>
                        </div>
                        <h1 className="swiper-title" style={{color : title_color}}>
                            {title_text}
                        </h1>
                        <p className="swiper-text" style={{color : text_color}}>
                            {text_text}
                        </p>
                    </div>
                    <div className="swiper-content-right">
                        <img className="swiper-right-img" src={img_src} alt={img_alt}/>
                    </div>
                </div>
            </div>
        </a> 
    );
}

export default TopBannerContent;