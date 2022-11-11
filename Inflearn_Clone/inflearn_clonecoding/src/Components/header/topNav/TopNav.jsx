import React, { useState, useEffect } from 'react';
import TopNavDesktop from './TopNavDesktop';
import TopNavMobile from './TopNavMobile';

function TopNav(props) {

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

    return (
        <header id='header' className={ScrollActive? "fixed" : ""}>
            <nav className='navbar'>
                <TopNavMobile/>
                <TopNavDesktop/>
            </nav>
        </header>
    );
}

export default TopNav;