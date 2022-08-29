import React from "react";

function TopInfoNonClickA({text, href, svg_first_path, svg_first_fill, svg_second_path, svg_second_fill}){
    return(
        <a href={href}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://ww.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d={svg_first_path} fill={svg_first_fill}></path>
                <path d={svg_second_path} fill={svg_second_fill}></path>
            </svg>
            {text}
        </a>
    )
}

export default TopInfoNonClickA;