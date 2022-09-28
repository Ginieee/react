import React from "react";
import { NavLink } from "react-router-dom";

function TopNavMenuRightButton(){
    return(
        <div className="navbar-item buttons">
            <a className="button space-inset-4 signin" href="/" role="button">
                로그인
            </a>
            <NavLink className="e-signup button space-inset-4 is-primary" to="/join">
                회원가입
            </NavLink>
        </div>
    );
}

export default TopNavMenuRightButton;