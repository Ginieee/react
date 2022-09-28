import React from 'react';

function RoadMapCard({href,img_src,title,author}) {
    return (
        <div className='roadmap-cad-box'>
            <div className='cad image_cad roadmap_cad'>
                <a href={href}>
                    <div className="cad-image image">
                        <img src={img_src} className="cad-image-content" alt='로드맵 대표 이미지'/>
                    </div>
                    <div className='roadmap-cad-content'>
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