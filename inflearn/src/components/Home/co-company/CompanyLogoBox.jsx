import React from 'react';
import {CompanyLogoContentData} from 'data/Home/CompanyLogo/CompanyLogoContentData';
import CompanyLogoContent from './CompanyLogoContent';

function CompanyLogoBox(props) {
    return (
        <div className='company-section_logo_box'>
            {CompanyLogoContentData.map((item) => {
                return(
                    <CompanyLogoContent
                    src={item.src}
                    alt={item.alt}
                    />
                );
            })}
        </div>
    );
}

export default CompanyLogoBox;