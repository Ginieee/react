import React from 'react';
import AngleRight from 'components/fontAwesome/AngleRight';

function ReviewButton({href, text}) {
    return (
        <a className='review_button button space-inset-stretch-5' href={href}>
            <span>{text}</span>
            <span className='spanIcon'>
                <AngleRight/>
            </span>
        </a>
    );
}

export default ReviewButton;