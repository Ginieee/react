import React from 'react';
import TopNavLogoA from './TopNavLogoA';
import TopNavMenu from './TopNavMenu';

function DesktopVer(props) {
    return (
        <div className="container desktop_container">
            <div className="content">
                <TopNavLogoA/>
                <TopNavMenu/>
            </div>
        </div>
    );
}

export default DesktopVer;