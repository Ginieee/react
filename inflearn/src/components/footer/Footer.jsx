import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTopMenuBox from './FooterTopMenuBox';

function Footer(props) {
    return (
        <footer className='footer'>
            <div className='wrapper'>
                <FooterTopMenuBox/>
                <FooterBottom/>
            </div>
        </footer>
    );
}

export default Footer;