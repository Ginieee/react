import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ReviewCard({nameText, timeText, linkSrc, lectureTitle, reviewText}) {
    return (
        <>
        <div className='box_top'>
            <span className='text is-2 name'>{nameText}</span>
            <span className='text is-3 date'>{timeText}</span>
        </div>
        <div className='box_bottom'>
            <Link to={linkSrc} className='title is-7'>
                <span>{lectureTitle}</span>
                <span className='icon'>
                    <i className='fal fa-angle-right'>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </i>
                </span>
            </Link>
            <div className='text is-1'>{reviewText}</div>
        </div>
        </>
    );
}

export default ReviewCard;