import React from 'react';
import EmptyStar from './EmptyStar';
import FillStar from './FillStar';

function LectureCard({href, img_src, title, instructor, rating, review, price, tags}) {
    const starCount = () => {
        const result=[]
        const fill = rating / 1;
        const empty = 5 - fill;
        for(let i=0; i<fill;i++){
            result.push(<FillStar/>);
        }
        for(let j=0;j<empty;j++){
            result.push(<EmptyStar/>);
        }
        return result;
    }
    return (
        <div className='swiper-slide free-lecture'>
            <div className='card course course_card_item'>
                <a className='course_card_front' href={href}>
                    <div className='card-image is_thumbnail .image'>
                        <img loading='lazy' src={img_src} className="swiper-lazy" alt='이미지'/>
                        <div className='onload_placeholder'></div>
                        <div className='swiper-lazy-preloader'></div>
                        <span className='course_card_ribbon is-shown-admin student_cnt'>
                            5120
                        </span>
                    </div>
                    <div className='card-content'>
                        <div className='course_title'>{title}</div>
                        <div className='instructor'>{instructor}</div>
                        <div className='rating'>
                            <div className='rating_star'>
                                {starCount()}
                            </div>
                            <span className='review_cnt'>{review}</span>
                        </div>
                        <div className='price'>{price}</div>
                        <div className='tags'>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default LectureCard;