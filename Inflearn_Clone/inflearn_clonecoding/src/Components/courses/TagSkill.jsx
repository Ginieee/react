import React from 'react';

function TagSkill({text}) {
    return (
        <button className='tag skill button' name={text}>
            {text}
        </button>
    );
}

export default TagSkill;