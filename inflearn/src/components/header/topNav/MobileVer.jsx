import React from 'react';
import TopNavLogoA from './TopNavLogoA';
import { NavLink } from "react-router-dom";

function MobileVer(props) {
    return (
        <div className="container mobile_container">
            <div className="content">
                <div className="mobile_left">
                    <span className="infd-icon e_left aside_btn">
                        <svg width='30' height='30' viewBox = "0 0 24 24" xmln="http://www.w3.org/2000/svg">
                            <path fill="#495057" fillRule="evenodd" clipRule="evenodd" d="M1.5 6C1.22386 6 1 6.22386 1 6.5C1 6.77614 1.22386 7 1.5 7H10C10.2761 7 10.5 6.77614 10.5 6.5C10.5 6.22386 10.2761 6 10 6H1.5ZM1.5 16C1.22386 16 1 16.2239 1 16.5C1 16.7761 1.22386 17 1.5 17H10C10.2761 17 10.5 16.7761 10.5 16.5C10.5 16.2239 10.2761 16 10 16H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H8.5C8.77614 11 9 11.2239 9 11.5C9 11.7761 8.77614 12 8.5 12H1.5C1.22386 12 1 11.7761 1 11.5ZM15.5 15.5C17.7091 15.5 19.5 13.7091 19.5 11.5C19.5 9.29086 17.7091 7.5 15.5 7.5C13.2909 7.5 11.5 9.29086 11.5 11.5C11.5 13.7091 13.2909 15.5 15.5 15.5ZM15.5 16.5C16.7006 16.5 17.8024 16.0768 18.6644 15.3715L22.1464 18.8536C22.3417 19.0488 22.6583 19.0488 22.8536 18.8536C23.0488 18.6583 23.0488 18.3417 22.8536 18.1464L19.3715 14.6644C20.0768 13.8024 20.5 12.7006 20.5 11.5C20.5 8.73858 18.2614 6.5 15.5 6.5C12.7386 6.5 10.5 8.73858 10.5 11.5C10.5 14.2614 12.7386 16.5 15.5 16.5Z"></path>
                        </svg>
                    </span>
                </div>
                <TopNavLogoA/>
                <div className='mobile_right'>
                    <a className='button space-inset-4 text is-5 sighin' role='button' href='/'>로그인</a>
                    <NavLink className="e-signup button space-inset-4 text is-5 is-primary" to="/join">회원가입</NavLink>
                </div>
            </div>
        </div>
    );
}

export default MobileVer;