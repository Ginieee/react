import React from "react";
import { topNavLogoContent } from "data/header/topNavContent/topNavLogoContent";
import TopNavLogoSVG from "./TopNavLogoSVG";

function TopNavLogoA() {
    return(
        <div className="brand_header">
            <a href="/" className="brand_logo">
                <span className="visually_hidden">인프런</span>
                <TopNavLogoSVG
                    path1={topNavLogoContent.path1}
                    path2={topNavLogoContent.path2}
                    path3={topNavLogoContent.path3}
                />
            </a>
        </div>
    )
}

export default TopNavLogoA;