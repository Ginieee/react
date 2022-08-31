import React from 'react';
import right from 'img/next_arrow_black.png'
import LectureBody from './LectureBody';

function LectureHeader({href, title, text, cardList}) {
    return (
        <section className='lecture'>
            <div className='container-pd10'>
                <div className='main-course-list'>
                    <div className='header'>
                        <div className='courses-header'>
                            <a href={href}>
                                <h1 className='title is-4 is-spaced'>
                                    {title}
                                    <span className='spanIcon'>
                                        <img className='spanIcon_arrow_right' src={right} alt="이동"/>
                                    </span>
                                </h1>
                            </a>
                            <p className='subtext is-2'>
                                {text}
                            </p>
                        </div>
                    </div>
                    <LectureBody
                    data={cardList}
                    />
                </div>
            </div>
        </section>
    );
}

export default LectureHeader;