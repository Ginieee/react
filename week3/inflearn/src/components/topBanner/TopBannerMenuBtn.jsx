import React from 'react';
import Prev from 'components/fontAwesome/Prev';
import Next from 'components/fontAwesome/Next';
import Play from 'components/fontAwesome/Play';

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
                    <Prev/>
                </button>
                <button type='button' className='control-btn-pause-play'>
                    <svg className='btn-pause-svg' viewBox='0 0 155.3 159.3' xmlns='http://www.w3.org/2000/svg'>
                        <path fill='#ffffff' d='m62 135.3h-13.3c-1.9 0-3.4-1.5-3.4-3.4v-104.6c0-1.9 1.5-3.4 3.4-3.4h13.3c1.9 0 3.4 1.5 3.4 3.4v104.7c-.1 1.8-1.6 3.3-3.4 3.3z'></path>
                        <path fill='#ffffff' d='m106.6 135.3h-13.3c-1.9 0-3.4-1.5-3.4-3.4v-104.6c0-1.9 1.5-3.4 3.4-3.4h13.3c1.9 0 3.4 1.5 3.4 3.4v104.7c0 1.8-1.5 3.3-3.4 3.3z'></path>
                    </svg>
                    <Play/>
                </button>
                <button type='button' className='control-btn'>
                    <Next/>    
                </button>
            </div>
        </div>
    );
}

export default TopBannerMenuBtn;