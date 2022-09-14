import React from 'react';

function CoursesApplyCard({title, text, button}) {
    return (
        <div className='apply_card'>
            <div className='apply_title'>{title}</div>
            <div className='apply_desc'>
                {text}
            </div>
            <a className='button button_primary' href='/'>{button}</a>
        </div>
    );
}

export default CoursesApplyCard;