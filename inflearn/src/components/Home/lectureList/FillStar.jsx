import React from 'react';
import fillStar from 'img/fill_star.png'

function FillStar(props) {
    return (
        <div>
            <img className='star' src={fillStar} alt="노란별"/> 
        </div>
    );
}

export default FillStar;