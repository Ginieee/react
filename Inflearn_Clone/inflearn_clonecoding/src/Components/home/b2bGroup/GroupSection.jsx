import { b2bData } from 'Data/home/b2bData';
import React from 'react';

function GroupSection(props) {
    return (
        <section className='group-section'>
            <h3 className='group-section__title'>
            이미 많은 기업 구성원들이
            <br className='group-section__title--mobile-only'/>
            인프런에서 성장하고 있어요.
            </h3>
            <div className='group-section__logo-cover'>
                {
                    b2bData.map((item,i)=>{
                        return (
                            <div className='group-section__logo-el'
                            key={'b2bLogo' + i}>
                                <img
                                src={item.imgSrc}
                                alt={item.altMsg}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default GroupSection;