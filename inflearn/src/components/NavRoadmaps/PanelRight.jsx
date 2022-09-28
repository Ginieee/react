import React from 'react';
import {roadmapsCardData} from 'data/NavRoadmaps/roadmapsCardData'
import RoadmapsCard from './RoadmapsCard';

function PanelRight(props) {
    return (
        <div className='panel_right'>
            <div className='view'>
                <div className='roadmaps_card is-multiline is-mobile'>
                    {
                        roadmapsCardData.map((item) => {
                            return(
                                <RoadmapsCard
                                imgHref={item.imgHref}
                                src={item.src}
                                contentHref={item.contentHref}
                                cardHref={item.cardHref}
                                levelText={item.levelText}
                                tag1Href={item.tag1Href}
                                tag2Href={item.tag2Href}
                                title={item.title}
                                author={item.author}
                                countLectureMeta={item.countLectureMeta}
                                countPeopleMeta={item.countPeopleMeta}
                                />
                            );
                        })
                    }
                </div>
                <nav className='infd-pagination roadmap__pagination-cover'>
                    <ul className='infd-pagination-cover'>
                        <a className='infd-pagination-link is-current' href='/'>1</a>
                        <a className='infd-pagination-link e-pagination-link' aria-label='2 페이지로 이동' href='/'>2</a>
                        <a className='infd-pagination-link e-pagination-link' aria-label='3 페이지로 이동' href='/'>3</a>
                        <a className='infd-pagination-link e-pagination-link' aria-label='4 페이지로 이동' href='/'>4</a>
                        <a className='infd-pagination-link e-pagination-link' aria-label='5 페이지로 이동' href='/'>5</a>
                        <a className='infd-pagination-link e-pagination-link' aria-label='6 페이지로 이동' href='/'>6</a>
                        <a className='infd-pagination-link e-pagination-link' aria-label='7 페이지로 이동' href='/'>7</a>
                        <a className='infd-pagination-button e-pagination-link infd-pagination-next' href='/'>
                            <span>다음</span>
                            <span className='infd-icon'>
                                <svg width='6' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 7 12">
                                    <path fill='#212529' fillRule='evenodd' d='M6.834 5.602L1.298.165c-.22-.22-.578-.22-.799 0L.166.498c-.221.22-.221.576 0 .797L4.973 6 .17 10.705c-.22.22-.22.577 0 .797l.334.333c.22.22.578.22.799 0l5.535-5.437c.217-.22.217-.576-.004-.796z'></path>
                                </svg>
                            </span>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default PanelRight;