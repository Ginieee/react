import React from 'react';
import {CompanySectionTitle} from 'data/CompanyLogo/CompanySectionTitle';
import CompanyLogoBox from './CompanyLogoBox';

function CompanySection(props) {
    return (
        <section className='company-section'>
            <h3 className='company-section_title'>
                {CompanySectionTitle.title1}
                <br className='company-section--mobile-only'/>
                {CompanySectionTitle.title2}
            </h3>
            <CompanyLogoBox/>
        </section>
    );
}

export default CompanySection;