import React from "react";
import {useMediaQuery} from 'react-responsive';
import DesktopVer from "./DesktopVer";
import MobileVer from "./MobileVer";

function TopNav(){

    const isDesktop = useMediaQuery({
        query:'(min-width:1025px)',
    });

    return(
        <header id="header">
            <nav className="navbar">
                {isDesktop ? <DesktopVer/> : <MobileVer/>}
            </nav>
        </header>
    );
}

export default TopNav;