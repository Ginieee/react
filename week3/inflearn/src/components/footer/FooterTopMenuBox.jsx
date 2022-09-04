import React from 'react';
import {footerMenuList} from 'data/footer/footerMenuList'
import FooterMenuList from './FooterMenuList';

function FooterTopMenuBox(props) {
    return (
        <div className='footer_top footer_menu_box'>
            {
                footerMenuList.map((item) => {
                    return(
                        <FooterMenuList
                        title={item.title}
                        height={item.height}
                        sublist={item.sublist}
                        />
                    );
                })
            }
        </div>
    );
}

export default FooterTopMenuBox;