import Bars from 'components/fontAwesome/Bars';
import Sliders from 'components/fontAwesome/Sliders';
import ThLarge from 'components/fontAwesome/ThLarge';
import React from 'react';

function HeaderNav(props) {
    return (
        <div className='header_navigation'>
            <div className='nav_left'>
                <button type='button' aria-label='필터 메뉴 보기' className='slider_button'>
                    <Sliders/>
                </button>
            </div>
            <div className='nav_right'>
                <button type='button' aria-label='카드 뷰' className='toggle_view change_to_card_button active'>
                    <ThLarge/>
                </button>
                <button type='button' aria-label='리스트 뷰' className='toggle_view change_to_list_button'>
                    <Bars/>
                </button>
            </div>
        </div>
    );
}

export default HeaderNav;