import React from "react";

function TopInfoClickA({text, href, svg_path, svg_fill}){
    return(
        <a href={href}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://ww.w3.org/2000/svg">
                <path d={svg_path} fill={svg_fill}></path>
            </svg>
            {text}
        </a>
    )
}

export default TopInfoClickA;