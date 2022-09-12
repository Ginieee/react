import React from 'react';
import SearchSection from './SearchSection';
import TagSection from './TagSection';

function TopSearch(props) {
    return (
        <div>
            <SearchSection/>
            <TagSection/>
        </div>
    );
}

export default TopSearch;