import React from "react";

function TopInfoRightUl({text, href}) {
    return (
        <ul className="top-info-right-ul">
            <li>
                <a href={href}>
                    {text}
                </a>
            </li>
        </ul>
    )
}

export default TopInfoRightUl;