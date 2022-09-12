import React from "react";
import { topNavLogoContent } from "data/topNavContent/topNavLogoContent";
import TopNavLogoSVG from "./TopNavLogoSVG";

function TopNavLogoA() {
    return(
        <div className="brand_header">
            <a href="/" className="brand_logo">
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