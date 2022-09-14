import React from 'react';
import {topSearchTagData} from 'data/Home/topSearch/topSearchTagData'
import TagSectionItem from './TagSectionItem';

function TagSection(props) {
    return (
        <section className='tag-section'>
            <ul className='container tag-section__container'>
                {
                    topSearchTagData.map((item) => {
                        return(
                            <TagSectionItem
                            tag={item.text}
                            />
                        );
                    })
                }
            </ul>
        </section>
    );
}

export default TagSection;