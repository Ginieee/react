import React from 'react';

function CompanyLogoContent({src, alt}) {
    return (
        <div className='company-section_logo_content'>
            <img src={src} alt={alt}/>
        </div>
    );
}

export default CompanyLogoContent;