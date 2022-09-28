import React from "react";
import {topNavMenu} from "data/header/topNavContent/topNavMenu";
import TopNavMenuLeftContent from "./TopNavMenuLeftContent";

function TopNavMenuLeft(){
    return(
        <div className="navbar-left">
            {
                topNavMenu.map((item) => {
                    return(
                        <TopNavMenuLeftContent
                        title={item.title}
                        href={item.href}
                        />
                    )
                })
            }
        </div>
    );
}

export default TopNavMenuLeft;