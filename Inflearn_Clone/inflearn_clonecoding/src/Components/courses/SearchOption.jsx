import React from 'react';

function SearchOption(props) {
    return (
        <div className='search-option'>
            <nav className='course-filter'>
                <div className='floating-box-wrapper e-floating-box-wrapper'>
                    <button className='course-filter__toggle-button e-course-filter-toggle ac-button is-grey'>
                        <span className='toggle-button__left'>
                            <i className='icon'>
                                <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'
                                fill='none' width='16' height='16'>
                                    <path d='M8 10.4a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h3.6a.6.6 0 0 1 .07 1.196l-.07.004H9.8a.606.606 0 0 1-.1-.008 1.8 1.8 0 0 1-3.4-.001l-.03.005-.07.004H2.6a.6.6 0 0 1-.07-1.196l.07-.004h3.6c.034 0 .067.003.1.008A1.8 1.8 0 0 1 8 10.4zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2zM3.8 6.2a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h7.8a.6.6 0 0 1 .07 1.196l-.07.004H5.6a.605.605 0 0 1-.1-.008A1.8 1.8 0 1 1 3.8 6.2zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2zM10.4 2a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h1.2a.6.6 0 0 1 .07 1.196l-.07.004h-1.2a.605.605 0 0 1-.1-.008 1.8 1.8 0 0 1-3.4-.001l-.03.005-.07.004h-6a.6.6 0 0 1-.07-1.196L2.6 3.2h6c.034 0 .067.003.1.008A1.8 1.8 0 0 1 10.4 2zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2z'
                                    fill='#3E4042'/>
                                </svg>
                            </i>
                            <span className='toggle-button__text'>필터</span>
                        </span>
                        <div className='toggle-button__right'>
                            <span className='course-filter__item'>유료</span>
                            <svg viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' width='10' height='14'>
                                <path d='M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z' fill='#ABB0B5'/>
                            </svg>
                            <span className='course-filter__item'>무료</span>
                            <svg viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' width='10' height='14'>
                                <path d='M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z' fill='#ABB0B5'/>
                            </svg>
                            <span className='course-filter__item'>할인중</span>
                            <svg viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' width='10' height='14'>
                                <path d='M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z' fill='#ABB0B5'/>
                            </svg>
                            <span className='toggle-button__right__divider'></span>
                            <span className='course-filter__item'>입문</span>
                            <svg viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' width='10' height='14'>
                                <path d='M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z' fill='#ABB0B5'/>
                            </svg>
                            <span className='course-filter__item'>초급</span>
                            <svg viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' width='10' height='14'>
                                <path d='M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z' fill='#ABB0B5'/>
                            </svg>
                            <span className='course-filter__item'>중급이상</span>
                            <svg viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' width='10' height='14'>
                                <path d='M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z' fill='#ABB0B5'/>
                            </svg>
                        </div>
                    </button>
                </div>
            </nav>
            <div className='courses_order_select'>
                <label for="courses_order_selector" class="visually_hidden">정렬 순서 선택:</label>
                <select id='courses_order_selector' name='order_select'>
                    <option value='seq' selected>추천순</option>
                    <option value='popular'>인기순</option>
                    <option value='recent'>최신순</option>
                    <option value='rating'>평점순</option>
                    <option value='famous'>좋아요순</option>
                </select>
                <span className='courses_order_select__icon'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
                        <path fill='#212529' fillRule='evenodd' d='M12.77 5.563c.196.195.196.512 0 .707l-4.166 4.167c-.195.195-.512.195-.707 0L3.73 6.27c-.195-.195-.195-.512 0-.707.195-.195.512-.195.707 0L8.25 9.376l3.813-3.813c.196-.195.512-.195.707 0z' clipRule='evenodd'/>
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default SearchOption;