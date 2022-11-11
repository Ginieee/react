import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faCartPlus, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';


function RecentSlide({linkSrc, imgSrc, ribbonCnt, courseTitle, instructor, price, tags, level, group, use, isSale, saleText, delPrice}) {

    const saleRibbon = () => {
        if(isSale) {
            return (
                <div className='course_card_ribbon hidden_to_group'>
                    <FontAwesomeIcon icon={faCertificate}/>
                    {saleText}
                </div>
            );
        }
        return;
    }

    const setDelPrice = () => {
        if(isSale) {
            return (
                <div className='price'>
                    <del>{delPrice}</del>
                    <br/>
                    <span className='pay_price'>{price}</span>
                </div>
            );
        }
        return (
            <div className='price'>{price}</div>
        );
    }

    return (
        <div className='card course course_card_item'>
            <Link className='course_card_front e_course_click' to={linkSrc}>
                <div className='card-image'>
                    <figure className='image is_thumbnail'>
                        <img loading='lazy' src={imgSrc}
                        className='swiper-lazy' alt='FreeCoursesimage'/>
                        <div className='onload_placeholder'></div>
                        <div className='swiper-lazy-preloader'></div>
                    </figure>
                    {saleRibbon()}
                    <span className='course_card_ribbon is-shown-admin student_cnt'>{ribbonCnt}</span>
                </div>
                <div className='card-content'>
                    <div className='course_title'>{courseTitle}</div>
                    <div className='instructor'>{instructor}</div>
                    {setDelPrice()}
                    <div className='tags'>
                        {
                            tags.map((_,i)=> {

                                const color = tags[i].color;

                                return (
                                    <span 
                                    key={'freecoursesTags' + i}
                                    className='tag '
                                    style={{backgroundColor:color}}>
                                        {tags[i].text}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </Link>
            <div className='course_card_back'>
                <Link to={linkSrc} className='e_course_click'>
                    <p className='course_title'>{courseTitle}</p>
                    <p className='course_description'></p>
                    <div className='back_course_metas'>
                        <div className='course_level'>
                            <span>
                                <svg width='16' className='svg-inline--fa fa-signal-alt fa-w-20' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                                    <path fill='currentColor' d='M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z'/>
                                </svg>
                                {level}
                            </span>
                        </div>
                        <div>
                            <span>
                                <svg focusable='false' width='16' xmlns='http://www.w3.org/2000/svg' className='svg-inline--fa fa-folder-tree fa-w-18' viewBox='0 0 576 512'>
                                    <path fill='currentColor' d='M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v64H64V8a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v392a16 16 0 0 0 16 16h208v64a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v64H64V128h192v64a32 32 0 0 0 32 32zm0 96h66.74l32 32H512v128H288zm0-288h66.74l32 32H512v128H288z'/>
                                </svg>
                                {group}
                            </span>
                        </div>
                        <div className='course_skills'>
                            <span>
                                <svg width='16' focusable='false' className='svg-inline--fa fa-cubes fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                    <path fill='currentColor' d='M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z'/>
                                </svg>
                                {use}
                            </span>
                        </div>
                    </div>
                </Link>
                <div className='course_card_control active_btn'>
                    <StyledTooltip
                    title="수강바구니에 추가"
                    arrow
                    placement='left'>
                        <div className='far fa-cart-plus fa-lg'>
                            <FontAwesomeIcon 
                            icon={faCartPlus}
                            style={{cursor:'grab'}}/>
                        </div>
                    </StyledTooltip>
                    <StyledTooltip
                    title="좋아요에 추가"
                    arrow
                    placement='left'>
                        <div className='far fa-heart fa-lg'>
                            <FontAwesomeIcon 
                            icon={faHeart}
                            style={{cursor:'grab'}}/>
                        </div>
                    </StyledTooltip>
                    <StyledTooltip
                    title='내 폴더에 추가'
                    arrow
                    placement='left'>
                        <div className='far fa-heart fa-lg'>
                            <FontAwesomeIcon 
                            icon={faPlus}
                            style={{cursor:'grab'}}/>
                        </div>
                    </StyledTooltip>
                </div>
            </div>
        </div>
    );
}

const StyledTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper:className}}/>
))`
    & .MuiTooltip-tooltip {
        color: rgba(0,0,0,.7);
        background: rgba(255,221,87,.9);
    }
    & .MuiTooltip-arrow {
        &::before {
            background-color: rgba(255,221,87,.9);
        }
    }
`;

export default RecentSlide;