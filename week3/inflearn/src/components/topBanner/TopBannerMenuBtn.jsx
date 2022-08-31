import React from 'react';
import prev from "img/prev_arrow.png";
import next from "img/next_arrow.png";
import pause from "img/pause.png";

function TopBannerMenuBtn(props) {
    return (
        <div className='top-banner-menu-btn'>
            <div className='index-wrapper'>
                <span className='current-index'>1</span>
                /
                <span className='total-count'>9</span>
            </div>
            <div className='control-wrapper'>
                <button type='button' className='control-btn'>
                    <img src={prev} className="control-btn-side-size" alt='이전'></img>
                </button>
                <button type='button' className='control-btn'>
                    <img src={pause} className="control-btn-mid-size" alt='일시정지'></img>
                </button>
                <button type='button' className='control-btn'>
                    <img src={next} className="control-btn-side-size" alt='다음'></img>
                </button>
            </div>
        </div>
    );
}

export default TopBannerMenuBtn;