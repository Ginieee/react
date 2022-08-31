import React from 'react';
import img from 'img/ic_search.png'

function SearchSection(props) {
    return (
        <section className='search-section'>
            <div className='container'>
                <div className='content'>
                    <h1 className='title is-4'>성장기회의 평등을 추구합니다</h1>
                    <div className='search_wrapper'>
                        <input className='input e_search_input' type="text" placeholder='배우고 싶은 지식을 입력해보세요.'></input>
                        <button className='button e_search_submit'>
                            <img className='icon' src={img} alt="검색"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchSection;