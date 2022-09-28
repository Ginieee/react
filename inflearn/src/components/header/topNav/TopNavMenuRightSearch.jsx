import React from "react";
import Search from "components/fontAwesome/Search";

function TopNavMenuRightSearch(){
    return(
        <div className="search search_bar navbar-item header_search header_search--gnb">
            <input className="input" type="text"/>
            <span className="search__icon e-header-search">
                <Search/>
            </span>
        </div>
    )
}

export default TopNavMenuRightSearch;