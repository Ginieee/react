import React from 'react';
import {brandLogoPath} from 'data/footer/brandLogoPath'

function FooterBottomLeft(props) {
    return (
        <div className='footer_bottom_left'>
            <div className='footer_left_top'>
                <span className='is-hidden-mobile'>
                    <a href='/'>
                        <svg id="icon_brand_logo" className='brand_logo' width={85} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 433 90'>
                            <path className='A' d={brandLogoPath.path1}></path>
                            <path className='A' d={brandLogoPath.path2}></path>
                            <path className='A' d={brandLogoPath.path3}></path>
                            <title>인프런 브랜드 로고</title>
                        </svg>
                    </a>
                </span>
                <span>
                    <a href='/'>개인정보취급방침</a>
                </span>
                <span>
                    <a href='/'>이용약관</a>
                </span>
            </div>
            <div className='footer_left_bottom'>
                <div className='info-dropdown'>
                    <span className='is-hidden-mobile'>(주)인프랩 | </span>
                    <span>대표자: 이형주 | </span>
                    <span>
                        사업자번호: 499-81-00612
                        <a href='/'> 사업자 정보 확인</a>
                    </span>
                    <br/>
                    <span>통신판매업: 2018-성남분당B-0062 | </span>
                    <span>개인정보보호책임자: 이동욱 | </span>
                    <span>
                        이메일:
                        <a href='/'> info@inflearn.com</a>
                    </span>
                    <br/>
                    <span>주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호</span>
                </div>
                ©INFLAB. ALL RIGHTS RESERVED
            </div>
        </div>
    );
}

export default FooterBottomLeft;