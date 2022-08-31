import React from 'react';
import more from "img/ic_arrow_row_gray.png"

function TopBannerMenuMore(props) {
    return (
        <button type='button' className='open-pages-button'>
            <img className='open-pages-button-img' src={more} alt="더보기"></img>
        </button>
    );
}

export default TopBannerMenuMore;