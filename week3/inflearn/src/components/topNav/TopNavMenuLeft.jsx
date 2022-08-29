import React from "react";
import {topNavMenu} from "data/topNavContent/topNavMenu";
import TopNavMenuLeftContent from "./TopNavMenuLeftContent";

function TopNavMenuLeft(){
    return(
        <div className="top-nav-menu-left">
            {
                topNavMenu.map((item) => {
                    return(
                        <TopNavMenuLeftContent
                        title={item.title}
                        />
                    )
                })
            }
        </div>
    );
}

export default TopNavMenuLeft;