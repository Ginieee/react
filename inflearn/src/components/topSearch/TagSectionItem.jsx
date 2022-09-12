import React from 'react';

function TagSectionItem({tag}) {
    return (
        <li className='tag-section__tag-item'>
            <a href='/'>{tag}</a>
        </li>
    );
}

export default TagSectionItem;