import React from "react";
import TopNavLogoA from "./TopNavLogoA";
import TopNavMenu from "./TopNavMenu";

function TopNav(){
    return(
        <header id="header">
            <nav className="top-nav-wrapper">
                <div className="top-nav-container">
                    <div className="top-nav-content">
                        <TopNavLogoA/>
                        <TopNavMenu/>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default TopNav;