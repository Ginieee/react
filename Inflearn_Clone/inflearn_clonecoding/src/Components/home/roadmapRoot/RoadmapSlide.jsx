import React from 'react';
import { Link } from 'react-router-dom';

function RoadmapSlide({linkSrc, imgSrc, title, author}) {
    return (
        <div className='card image_card roadmap_card'>
            <Link to={linkSrc}>
                <div className='card-image'>
                    <figure className='image'>
                        <img src={imgSrc} alt='로드맵 대표이미지'/>
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='content'>
                        <h5>{title}</h5>
                        <p className='page_meta'>
                            <span className='author'>{author}</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default RoadmapSlide;