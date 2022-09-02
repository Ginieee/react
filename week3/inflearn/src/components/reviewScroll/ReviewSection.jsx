import React from 'react';
import ReviewLeft from './ReviewLeft';
import ReviewRight from './ReviewRight';

function ReviewSection(props) {
    return (
        <section className='review_section'>
            <div className='container'>
                <div className='content'>
                    <ReviewLeft/>
                    <ReviewRight/>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;