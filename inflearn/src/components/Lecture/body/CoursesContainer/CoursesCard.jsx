import React from 'react';

function CoursesCard({src, student_cnt, title, instructor, rating, review_cnt, price, tags}) {
    return (
        <div className='column is-3-fullhd is-3-widescreen is-3-desktop is-4-tablet is-6-mobile'>
            <div className='card course course_card_item'>
                <a className='course_card_front' href='/'>
                    <div className='card-image'>
                        <figure className='image is_thumbnail'>
                            <img src={src} className='swiper-lazy' alt={alt} loading='lazy'/>
                            <div className='onload_placeholder'></div>
                            <div className='swiper-lazy-preloader'></div>
                        </figure>
                        <span className='course_card_ribbon is-shown-admin student_cnt'>{student_cnt}</span>
                    </div>
                    <div className='card-content'>
                        <div className='course_title'>{title}</div>
                        <div className='instructor'>{instructor}</div>
                        <div className='rating'>
                            <div className='rating_str'>

                            </div>
                            <span className='review_cnt'>{review_cnt}</span>
                        </div>
                    </div>
                </a>
                <div className='course_card_back'>

                </div>
            </div>
        </div>
    );
}

export default CoursesCard;