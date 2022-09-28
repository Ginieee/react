import React from "react";
import { NavLink } from "react-router-dom";

function TopNavMenuLeftContent({title, href}){

    // function mouseOver (event){
    //     event.target.style.color = 'red';
    // }

    // function mouseOut (event){
    //     event.target.style.color = "";
    // }

    // a태그 옆에 onMouseOver={mouseOver} onMouseOut={mouseOut}

    return(
        <div className="navbar-item">
            <NavLink to={href} className="navbar-item">
                <span>{title}</span>
            </NavLink>
        </div>
    );
}

export default TopNavMenuLeftContent;