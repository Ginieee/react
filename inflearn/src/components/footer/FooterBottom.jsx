import React from 'react';
import FooterBottomLeft from './FooterBottomLeft';
import FooterBottomRight from './FooterBottomRight';

function FooterBottom(props) {
    return (
        <div className='footer_bottom'>
            <FooterBottomLeft/>
            <FooterBottomRight/>
        </div>
    );
}

export default FooterBottom;