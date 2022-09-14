import React from 'react';

function CoursesBodyHeader(props) {
    return (
        <header className='courses_header'>
            <h1 className='title is-hidden'>전체 카테고리</h1>
            <div className='search'>
                <input type="text" enterkeyhint="go" className="input" placeholder="강의 검색하기"/>
                <button type="button" className="button">검색</button>
            </div>
        </header>
    );
}

export default CoursesBodyHeader;