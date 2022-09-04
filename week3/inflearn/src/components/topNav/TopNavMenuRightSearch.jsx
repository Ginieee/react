import React from "react";
import Search from "components/fontAwesome/Search";

function TopNavMenuRightSearch(){
    return(
        <div className="top-nav-menu-right-search">
            <input className="search" type="text"/>
            <span className="search-wrapper">
                <Search/>
            </span>
        </div>
    )
}

export default TopNavMenuRightSearch;