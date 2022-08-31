import React from 'react';

function TagContent({backgroundColor, text}) {
    return (
        <span className='tag' style={{backgroundColor : backgroundColor}}>
            {text}
        </span>
    );
}

export default TagContent;