import React from "react";
import {topInfoClickContent} from 'data/topInfoContent/topInfoClickContent';
import { topInfoNonClickContent } from 'data/topInfoContent/topInfoNonClickContent';
import TopInfoClickA from './TopInfoClickA';
import TopInfoNonClickA from './TopInfoNonClickA';


function TopInfoLeftUl(){
    return(
        <ul className="top-info-left-ul">
            <li className="top-info-click-a">
                <TopInfoClickA
                    text={topInfoClickContent.text}
                    href={topInfoClickContent.href}
                    svg_path={topInfoClickContent.svg_path}
                    svg_fill={topInfoClickContent.svg_fill}
                />
            </li>
            <li className="top-info-nonclick-a">
                <TopInfoNonClickA
                    text={topInfoNonClickContent.text}
                    href={topInfoNonClickContent.href}
                    svg_first_path={topInfoNonClickContent.svg_first_path}
                    svg_first_fill={topInfoNonClickContent.svg_first_fill}
                    svg_second_path={topInfoNonClickContent.svg_second_path}
                    svg_second_fill={topInfoNonClickContent.svg_second_fill}
                />
            </li>
        </ul>
    );
}

export default TopInfoLeftUl;