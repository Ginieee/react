import React from 'react';
import ContentBody from './ContentBody';
import HeaderNav from './HeaderNav';

function RoadmapsMain(props) {
    return (
        <main className='container'>
            <div className='content_palette'>
                <HeaderNav/>
                <ContentBody/>
            </div>
        </main>
    );
}

export default RoadmapsMain;