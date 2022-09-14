import React from 'react';
import FooterLi from './FooterLi';

function CoursesBodyFooter(props) {

    const pages = () => {
        const res = [];
        for(let i = 1;i<=19;i++){
            res.push(<FooterLi num={i}/>)
        }

        return res;
    }

    return (
        <footer className='courses_footer'>
            <nav className='pagination is-centered is-small' aria-label='pagination' role='navigation'>
                <div className='pagination_container'>
                    <a className='pagination-link pagination-next' href='/'>다음 페이지</a>
                    <ul className='pagination-list'>
                        {pages()}
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default CoursesBodyFooter;