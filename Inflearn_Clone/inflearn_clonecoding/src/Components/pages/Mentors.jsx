import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { panelLeftData } from 'Data/roadmaps/panelLeftData';
import React from 'react';
import { Link } from 'react-router-dom';
import MentorsRight from 'Components/mentors/MentorsRight';

function Mentors(props) {
    return (
        <div className='pg___instructors'>
            <section className='instructor_list_section'>
                <header className='instructor_list_hero'>
                    <Link to='/mentors-intro'>
                        <div className='hero-content container'>
                            <div className='hero-content__image-cover'></div>
                            <h1 className='heading_list'>멘토링</h1>
                            <p className="heading_desc">
                                업계 선배들 혹은 동료들과 인사이트를 나눠 보세요.
                                <br/>
                                더 빨리, 더 멀리 갈 수 있어요.
                            </p>
                            <span className="heading_more">
                                멘토 지원하기
                                <svg height='16' viewBox='0 0 16 16' width='16' xmlns="http://www.w3.org/2000/svg">
                                    <path fill='#212529' clipRule='evenodd' d='m6.22 3.22c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06l-4.25 4.25c-.293.293-.767.293-1.06 0s-.293-.767 0-1.06l3.72-3.72-3.72-3.72c-.293-.293-.293-.767 0-1.06z' fillRule='evenodd'/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </header>
                <main className='container'>
                    <div className='content_palette' id='content_palette'>
                        <div className='content_body'>
                            <div className='panel_left'>
                                <div className='sticky'>
                                    <div className='field has-addons mentors__search-input'>
                                        <div className='control'>
                                            <input className='input e-input-search-mentor' type='text'/>
                                        </div>
                                        <div className='control'>
                                            <button className='button e-button-search-mentor' type='button'>검색</button>
                                        </div>
                                    </div>
                                    <div className='select sort_select'>
                                        <select datatype='order'>
                                            <option value='common'>기본순</option>
                                            <option value='latest'>최근신청순</option>
                                            <option value='recent'>신규멘토순</option>
                                            <option value='count'>인기순</option>
                                        </select>
                                    </div>
                                    <nav className='accordions checkbox_accordions'>
                                        <div className='accordion is-active first_accordion'>
                                            <div className='accordion-header toggle'>
                                                분야별
                                            </div>
                                            <div className='accordion-body level_accordion_body'>
                                                {
                                                    panelLeftData.map((item,i)=>{
                                                        return (
                                                            <div
                                                            key={'paneLeftData'+i} 
                                                            className='accordion-content'>
                                                                <div className='atom_checkbox accordion_checkbox'>
                                                                    <input className='visually_hidden checkbox' type='checkbox' id={`${item.id}`} value={`${item.id}`}/>
                                                                    <label htmlFor={item.id} className='left'>
                                                                        {item.title}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        );
                                                            
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </nav>
                                    <Link to='/mentors' className='filter_reset'>
                                        <i className='far fa-sync-alt'>
                                            <FontAwesomeIcon icon={faRotate}/>
                                        </i>
                                        &nbsp;&nbsp; 필터초기화
                                    </Link>
                                </div>
                            </div>
                            <MentorsRight/>
                        </div>
                    </div>
                </main>
            </section>
            <h1>Mentors 입니다.</h1>
        </div>
    );
}

export default Mentors;