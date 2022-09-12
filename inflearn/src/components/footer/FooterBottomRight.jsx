import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

function FooterBottomRight(props) {
    return (
        <div className='footer_bottom_right is-hidden-mobile'>
            <a href='https://post.naver.com/inflearn'>
                <i className='text'>N</i>
            </a>
            <a href='https://blog.naver.com/inflearn'>
                <i className='text'>B</i>
            </a>
            <a href='https://www.instagram.com/inflearn__official'>
                <i>
                    <FontAwesomeIcon icon={faInstagram}/>
                </i>
            </a>
            <a href='https://www.youtube.com/channel/UC0Y0T9JpgIBbyGDjvy9PbOg'>
                <i>
                    <FontAwesomeIcon icon={faYoutube}/>
                </i>
            </a>
            <a href='https://www.facebook.com/inflearn'>
                <i>
                    <FontAwesomeIcon icon={faFacebookF}/>
                </i>
            </a>
            <a href='https://twitter.com/inflearn'>
                <i>
                    <FontAwesomeIcon icon={faTwitter}/>
                </i>
            </a>
        </div>
    );
}

export default FooterBottomRight;