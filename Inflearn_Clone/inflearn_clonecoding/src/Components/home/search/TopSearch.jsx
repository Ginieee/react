import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function TopSearch(props) {
    return (
        <section className='search'>
            <div className='container'>
                <div className='content'>
                    <h1 className='title is-4'>인프런에서 가치를 높이세요</h1>
                    <div className='search_wrapper'>
                        <input className='input e_search_input' type='text' placeholder='배우고 싶은 지식을 입력해보세요.'/>
                        <button className='button e_search_submit'>
                            <span className='icon'>
                                <i className='far fa-search'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </i>
                            </span>
                        </button>
                        <div className='search_view_cover e_search_view_cover'>
                            <div className='search_list_cover'>
                                <h4 className='search_list_title is-hidden-mobile'>강의</h4>
                                <div className='search_list search_course_list'>
                                    {/* 강의 목록들 */}
                                </div>
                            </div>
                            <div className='search_list_cover'>
                                <h4 className='search_list_title is-hidden-mobile'>스킬태그</h4>
                                <div className='search_list search_skill_list'>
                                    {/* 태그 목록들 */}
                                </div>
                            </div>
                            <div className='search_list_cover'>
                                <h4 className='search_list_title is-hidden-mobile'>로드맵</h4>
                                <div className='search_list search_roadmap_list'>
                                    {/* 로드맵 목록들 */}
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopSearch;