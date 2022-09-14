import React from "react";
import { NavLink } from 'react-router-dom';

function TopInfoClickA({text, href, svg_path, svg_fill}){
    return(
        <NavLink exact to="/">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://ww.w3.org/2000/svg">
                <path d={svg_path} fill={svg_fill}></path>
            </svg>
            {text}
        </NavLink>
    )
}

export default TopInfoClickA;