import React from "react";
import image from "img/ic_search.png"

function TopNavMenuRightSearch(){
    return(
        <div className="top-nav-menu-right-search">
            <input className="search" type="text"/>
            <span className="search-wrapper">
                <img className="search-btn" src={image} alt="검색"/>
            </span>
        </div>
    )
}

export default TopNavMenuRightSearch;