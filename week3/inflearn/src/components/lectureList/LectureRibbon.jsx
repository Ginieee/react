import React from 'react';

function LectureRibbon({text, small}) {
    return (
        <div className='course_card_ribbon'>
            <i className='fas'>{text}</i>
            <small>{small}</small>
        </div>
    );
}

export default LectureRibbon;