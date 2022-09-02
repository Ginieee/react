import React from 'react';
import right from 'img/next_arrow_black.png'

function ReviewButton({href, text}) {
    return (
        <a className='review_button button space-inset-stretch-5' href={href}>
            <span>{text}</span>
            <span className='spanIcon'>
                <img className='spanIcon_arrow_right' src={right} alt="이동"/>
            </span>
        </a>
    );
}

export default ReviewButton;