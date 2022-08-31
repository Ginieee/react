import React from "react";
import TopNavMenuRightButton from "./TopNavMenuRightButton";
import TopNavMenuRightSearch from "./TopNavMenuRightSearch";

function TopNavMenuRight(){
    return(
        <div className="top-nav-menu-right">
            <TopNavMenuRightSearch/>
            <TopNavMenuRightButton/>
        </div>
    );
}

export default TopNavMenuRight;