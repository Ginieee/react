import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useParams } from 'react-router-dom';
import PanelLeft from 'Components/roadmaps/PanelLeft';
import PanelRight from 'Components/roadmaps/PanelRight';

function Roadmaps(props) {

    const params = useParams();

    return (
        <div className='pg___roadmap'>
            <section className='roadmap_list_section'>
                <header className='roadmap_list_hero'>
                    <h1 className='heading_list'>시작부터 실전까지. 로드맵</h1>
                    <div className='search_root'>
                        <div className='search_section'>
                            <div className='search_bar'>
                                <div className='select'>
                                    <select>
                                        <option value='title'>제목</option>
                                        <option value='body'>본문</option>
                                        <option value='user'>작성자</option>
                                    </select>
                                </div>
                                <input className='search_window' enterKeyHint='go' placeholder='학습 관련 스킬/로드맵 이름/강사명 검색하기'
                                type='text'/>
                                <button className='curved_button'>검색</button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className='container'>
                    <div className='content_palette'>
                        <div className='header_navigation'>
                            <div className='nav_left'>
                                <button className='slider_button' type='button'>
                                    <i className='far fa-sliders-h'>
                                        <FontAwesomeIcon icon={faSlidersH}/>
                                    </i>
                                </button>
                            </div>
                        </div>
                        <div className='content_body'>
                            <PanelLeft/>
                            <PanelRight/>
                        </div>
                    </div>
                </main>

            <h1>Roadmaps 입니다.</h1>
            <h3>number : {params.idx} 입니다.</h3>

            </section>
        </div>
    );
}

export default Roadmaps;