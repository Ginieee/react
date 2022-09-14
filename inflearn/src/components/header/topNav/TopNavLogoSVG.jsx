import React from "react";

function TopNavLogoSVG({path1, path2, path3}){
    return(
        <svg id="icon_brand_logo" width="110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 90">
            <path d={path1}></path>
            <path d={path2}></path>
            <path d={path3}></path>
            <title>인프런 브랜드 로고</title>
        </svg>
    );
}

export default TopNavLogoSVG;