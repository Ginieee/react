import React from 'react';

function BottomBannerCard({background_img, title_color, title, href, text}) {
    return (
        <div className='bottom_banner_slide' style={{backgroundImage : "url("+background_img +")"}} role='group'>
            <div className='container'>
                <h1 className='title is-7'>
                    <span style={{color : title_color}}>
                        {title}
                    </span>
                </h1>
                <a className='button space-inset-stretch-6 bold subtext is-1' href={href}>
                    {text}
                </a>
            </div>
        </div>
    );
}

export default BottomBannerCard;