import React from 'react';

function TopInputBanner(props) {
    return (
        <header className='roadmap_list_hero'>
            <h1 className='heading_list'>시작부터 실전까지. 로드맵</h1>
            <p className='heading_desc'>잘 설계된 로드맵을 따라 효율적으로 강의를 학습하세요.</p>
            <p className='heading_desc'>좋은 로드맵을 다른 사람과 공유하고 함께 들어요.</p>
            <div className='search_root'>
                <div className='search_section'>
                    <div className='search_bar'>
                        <div className='select'>
                            <select>
                                <option value="title">제목</option>
                                <option value="body">본문</option>
                                <option value="user">작성자</option>
                            </select>
                        </div>
                        <input className='search_window' enterKeyHint='go' type="text" placeholder="학습 관련 스킬/로드맵 이름/강사명 검색하기"></input>
                        <button className='curved_button'>검색</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopInputBanner;