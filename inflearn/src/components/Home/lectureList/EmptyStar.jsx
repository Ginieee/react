import React from 'react';
import emptyStar from 'img/not_fill_star.png'

function EmptyStar(props) {
    return (
        <div>
            <img className='star' src={emptyStar} alt="빈별"/> 
        </div>
    );
}

export default EmptyStar;