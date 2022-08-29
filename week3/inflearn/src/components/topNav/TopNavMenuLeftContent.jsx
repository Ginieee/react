import React from "react";

function TopNavMenuLeftContent({title}){

    // function mouseOver (event){
    //     event.target.style.color = 'red';
    // }

    // function mouseOut (event){
    //     event.target.style.color = "";
    // }

    // a태그 옆에 onMouseOver={mouseOver} onMouseOut={mouseOut}

    return(
        <div className="top-nav-menu-left-content-def">
            <a href="/" className="top-nav-menu-left-content-a-def">
                <span>{title}</span>
            </a>
        </div>
    );
}

export default TopNavMenuLeftContent;