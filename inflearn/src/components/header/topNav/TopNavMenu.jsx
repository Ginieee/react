import React from "react";
import TopNavMenuLeft from "./TopNavMenuLeft";
import TopNavMenuRight from "./TopNavMenuRight";

function TopNavMenu(){
    return(
        <div className="navbar-menu">
            <TopNavMenuLeft/>
            <TopNavMenuRight/>
        </div>
    );
}

export default TopNavMenu;