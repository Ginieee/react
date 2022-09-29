import { BREAKPOINT_PHONE_MEDIUM_START, minMediaQueries } from 'mediaQuery.ts';
import React from 'react';
import styled from 'styled-components';
import ListEl from './ListEl';
import NavListEl from './NavListEl';

function BottomNav(props) {
    return (
        <>
        <div className='InfD__BottomNavigation_dimmed'></div>
        <NavigationWrapper className='InfD__BottomNavigation'>
            <div className='more_content'>
                <ListEl/>
            </div>
            <div className='nav_content'>
                <NavListEl/>
            </div>
        </NavigationWrapper>
        </>
    );
}

const NavigationWrapper = styled.div `
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 75;
    ${minMediaQueries(BREAKPOINT_PHONE_MEDIUM_START)} {
        display: none;
    }
`

export default BottomNav;