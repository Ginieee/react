import React from 'react';

function RoadMapCard({href,img_src,title,author}) {
    return (
        <div className='roadmap-card-box'>
            <div className='card image_card roadmap_card'>
                <a href={href}>
                    <div className="card-image image">
                        <img src={img_src} className="card-image-content" alt='로드맵 대표 이미지'/>
                    </div>
                    <div className='roadmap-card-content'>
                        <div className='content'>
                            <h5>{title}</h5>
                            <p className='page_meta'>
                                <span className='author'>{author}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default RoadMapCard;