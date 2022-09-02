import React from 'react';
import right from 'img/next_arrow_black.png'

function ReviewCard({name, time, href, title, text}) {
    return (
        <div className='review_card_box space-inset-8'>
            <div className='review_card_box_top'>
                <span className='text is-2 name'>
                    {name}
                </span>
                <span className='text is-3 date'>
                    {time}
                </span>
            </div>
            <div className='review_card_box_bottom'>
                <a href={href} className="title is-7">
                    <span className='review_card_title'>{title}</span>
                    <span className='spanIcon'>
                        <img className='spanIcon_arrow_right' src={right} alt="이동"/>
                    </span>
                </a>
                <div className='text is-1'>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;