import React from 'react';
import {applyCardData} from 'data/Home/apply/applyCardData'
import ApplyCard from './ApplyCard';

function ApplyContent(props) {
    return (
        <div className='content'>
            <div className='apply_container'>
                <div className='apply_wrapper'>
                    {applyCardData.map((item) => {
                        return(
                            <ApplyCard
                            title={item.title}
                            text={item.text}
                            href={item.href}
                            btn_text={item.btn_text}
                            />
                        );
                    })
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default ApplyContent;