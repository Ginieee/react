import React from 'react';

function CoursesOrderSelect(props) {
    return (
        <div className='courses_order_select'>
            <label htmlFor='courses_order_selector' className='visually_hidden'>정렬 순서 선택:</label>
            <select id='courses_order_selector' name='order_select'>
                <option value="seq" selected> 추천순 </option>
                <option value="popular"> 인기순 </option>
                <option value="recent"> 최신순 </option>
                <option value="rating"> 평점순 </option>
                <option value="famous"> 좋아요순 </option>
            </select>
            <span className='courses_order_select__icon'>
                <svg width={16} xmlns="http://www.w3.org/2000/svg" height={16} viewBox="0 0 16 16">
                    <path fill='#212529' fillRule='evenodd' d='M12.77 5.563c.196.195.196.512 0 .707l-4.166 4.167c-.195.195-.512.195-.707 0L3.73 6.27c-.195-.195-.195-.512 0-.707.195-.195.512-.195.707 0L8.25 9.376l3.813-3.813c.196-.195.512-.195.707 0z' clipRule="evenodd"></path>
                </svg>
            </span>
        </div>
    );
}

export default CoursesOrderSelect;