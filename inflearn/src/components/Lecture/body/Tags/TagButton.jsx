import React from 'react';

function TagButton({name}) {
    return (
        <button className='tag skill button' name={name}>
            {name}
        </button>
    );
}

export default TagButton;