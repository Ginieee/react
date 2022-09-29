import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine, faList, faHouse, faRoad, faEllipsisH} from "@fortawesome/free-solid-svg-icons";

function NavListEl(props) {
    return (
        <div className='el_list'>
            <div className='el e_el__dashboard'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-chart-line' icon={faChartLine} />
                    </span>
                </span>
                <span className='icon_cover is_active'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-chart-line' icon={faChartLine} />
                    </span>
                </span>
                <div className='text is-5'>대시보드</div>
            </div>
            <div className='el e_el__courses'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-list' icon={faList} />
                    </span>
                </span>
                <span className='icon_cover is_active'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-list' icon={faList} />
                    </span>
                </span>
                <div className='text is-5'>강의</div>
            </div>
            <div className='el e_el__home active'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-house' icon={faHouse} />
                    </span>
                </span>
                <span className='icon_cover is_active'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-house' icon={faHouse} />
                    </span>
                </span>
                <div className='text is-5'>홈</div>
            </div>
            <div className='el e_el__roadmaps'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-road' icon={faRoad} />
                    </span>
                </span>
                <span className='icon_cover is_active'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-road' icon={faRoad} />
                    </span>
                </span>
                <div className='text is-5'>로드맵</div>
            </div>
            <div className='el e_el__more'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-ellipsis-h' icon={faEllipsisH} />
                    </span>
                </span>
                <span className='icon_cover is_active'>
                    <span className='icon'>
                        <FontAwesomeIcon className='icon-ellipsis-h' icon={faEllipsisH} />
                    </span>
                </span>
                <div className='text is-5'>더보기</div>
            </div>
        </div>
    );
}

export default NavListEl;