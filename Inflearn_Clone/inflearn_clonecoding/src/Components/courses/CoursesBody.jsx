import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { skillTagsData } from 'Data/courses/skillTagsData';
import TagSkill from './TagSkill';
import SearchOption from './SearchOption';
import { courseCardData } from 'Data/courses/courseCardData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Pagination } from '@mui/material';
import CourseCard from './CourseCard';

function CoursesBody(props) {

    const LAST_PAGE = courseCardData.length%24 === 0 ?
        parseInt(courseCardData.length/24) : parseInt(courseCardData.length/24) + 1;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(courseCardData.slice(0, 24));

    useEffect(()=> {
        if(page===LAST_PAGE){
            setData(courseCardData.slice(24*(page-1)));
        } else {
            setData(courseCardData.slice(24*(page-1), 24*(page-1)+24));
        }
    }, [page, LAST_PAGE]);

    const handlePage = (e) => {
        const nowPageInt = parseInt(e.target.outerText);
        setPage(nowPageInt);
    }

    return (
        <div className='column courses_body'>
            <header className='courses_header'>
                <h1 className='title is-hidden'>전체 카테고리</h1>
                <div className='search'>
                    <input type='text' enterkeyhint='go' className='input' placeholder='강의 검색하기'/>
                    <button type='button' className='button'>검색</button>
                </div>
            </header>
            <main className='courses_main'>
                <nav className='breadcrumb'>
                    <ul>
                        <li>
                            <Link to='/courses' className='category_link'>전체</Link>
                        </li>
                    </ul>
                </nav>
                <div className='tags are-medium skills'>
                    <div className='field has-addons search_skills'>
                        <div className='control'>
                            <input className='input' placeholder='기술검색' type='text'/>
                        </div>
                        <div className='control'>
                            <button className='button is-link e_remove_input'>
                                <i className='far fa-times'>
                                    <FontAwesomeIcon icon={faXmark}/>
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className='skill_buttons'>
                        {
                            skillTagsData.map((item,i)=>{
                                return (
                                    <TagSkill
                                    key={'skillTags'+ i}
                                    text={item.text}/>
                                );
                            })
                        }
                        <button className='tag more button'>
                            <i className='fas fa-ellipsis-h'>
                                <FontAwesomeIcon icon={faEllipsis}/>
                            </i>
                        </button>
                    </div>
                </div>
                <SearchOption/>
                <div className='courses_container'>
                    <div className='columns is-multiline is-mobile courses_card_list_body'>
                        {
                            data.map((item,i)=>{
                                return(
                                    <CourseCard
                                    key={'courseCardData'+i}
                                    linkSrc={item.linkSrc}
                                    imgSrc={item.imgSrc}
                                    ribbonCnt={item.ribbonCnt}
                                    courseTitle={item.courseTitle}
                                    instructor={item.instructor}
                                    rating={item.rating}
                                    review={item.review}
                                    price={item.price}
                                    tags={item.tags}
                                    level={item.level}
                                    group={item.group}
                                    use={item.use}
                                    isSale={item.isSale}
                                    saleText={item.saleText}
                                    delPrice={item.delPrice}
                                    text={item.text}/>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <footer className='courses_footer'>
                <Pagination
                count={LAST_PAGE}
                size="small"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handlePage}
                hidePrevButton
                hideNextButton
                siblingCount={4}
                boundaryCount={1}/>
            </footer>
        </div>
    );
}

export default CoursesBody;