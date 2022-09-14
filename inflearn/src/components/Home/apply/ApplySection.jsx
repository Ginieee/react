import React from 'react';
import ApplyContent from './ApplyContent';
import ApplyHeader from './ApplyHeader';

function ApplySection(props) {
    return (
        <section className='apply-section'>
            <div className='container'>
                <ApplyHeader/>
                <ApplyContent/>
            </div>
        </section>
    );
}

export default ApplySection;