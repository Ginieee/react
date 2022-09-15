import React from "react";
import { NavLink } from "react-router-dom";

function TopNavMenuRightButton(){
    return(
        <div className="top-nav-menu-right-button">
            <a className="button padding-8 signin" href="/" role="button">
                로그인
            </a>
            <NavLink className="button padding-8 signup is-primary" to="/join">
                회원가입
            </NavLink>
        </div>
    );
}

export default TopNavMenuRightButton;