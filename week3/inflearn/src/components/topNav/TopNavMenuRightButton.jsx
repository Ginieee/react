import React from "react";

function TopNavMenuRightButton(){
    return(
        <div className="top-nav-menu-right-button">
            <a className="button padding-8 signin" href="/" role="button">
                로그인
            </a>
            <a className="button padding-8 signup is-primary" href="/">
                회원가입
            </a>
        </div>
    );
}

export default TopNavMenuRightButton;