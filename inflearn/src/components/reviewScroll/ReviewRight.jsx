import React from 'react';
import {reviewCardData} from 'data/reviewSection/reviewCardData'
import ReviewCard from './ReviewCard';

function ReviewRight(props) {
    return (
        <div className='content_right'>
            <div className='review_scroll_container'>
                <div className='swiper-wrapper'>
                    {
                        reviewCardData.map((item) => {
                            return(
                                <ReviewCard
                                name={item.name}
                                time={item.time}
                                href={item.href}
                                title={item.title}
                                text={item.text}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ReviewRight;