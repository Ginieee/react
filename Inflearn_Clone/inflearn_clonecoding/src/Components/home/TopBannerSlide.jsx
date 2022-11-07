import React from 'react';
import { Link } from 'react-router-dom';
import TopBannerSlideTags from './TopBannerSlideTags';

function TopBannerSlide({link,bgColor, pcImg, mobileImg, altMessage, tags, h1Color, h1Text, pColor, pText}) {
    
    const showingTags = () => {
        if(tags.length >=1){
            return(
                <TopBannerSlideTags
                tags={tags}
                />
            );
        }
        return;
    }
    
    return (
        <Link to={link}>
            <div 
            className='scene_content'
            style={{backgroundColor:bgColor}}>
                <div className='container'>
                    <div className='cover_right'>
                        <img className='banner-pc-image' src={pcImg}
                        alt={altMessage}/>
                        <img className='banner-mobile-image' src={mobileImg}
                        alt={altMessage}/>
                    </div>
                    <div className='cover_left'>
                        {showingTags()}
                        <h1 className='admin_hero_title title is-3 bold'
                        style={{color:h1Color}}>
                            {h1Text}
                        </h1>
                        <p className='text is-1' style={{color:pColor}}>
                            {pText}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TopBannerSlide;