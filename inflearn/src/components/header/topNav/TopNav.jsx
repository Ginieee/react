import React from "react";
import { useState, useEffect } from "react";
import {useMediaQuery} from 'react-responsive';
import DesktopVer from "./DesktopVer";
import MobileVer from "./MobileVer";

function TopNav(){

    const [ScrollActive, setScrollActive] = useState(false);
    const [ScrollY, setScrollY] = useState(0);
    function handleScroll() {
        if(ScrollY > 100) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }
    useEffect(()=> {
        function scrollListener() { window.addEventListener("scroll", handleScroll);}
        scrollListener();
        return () => {window.removeEventListener("scroll", handleScroll);};
    });

    const isDesktop = useMediaQuery({
        query:'(min-width:1025px)',
    });

    return(
        <header id="header" className={ScrollActive? "fixed" : ""}>
            <nav className="navbar">
                {isDesktop ? <DesktopVer/> : <MobileVer/>}
            </nav>
        </header>
    );
}

export default TopNav;