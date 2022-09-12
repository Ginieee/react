import React from 'react';
import FooterSubList from './FooterSubList';

function FooterMenuList({title, height, sublist}) {
    return (
        <div className='menu_list'>
            <div className='list_title open'>
                {title}
            </div>
            <div className='menu_sublist' style={{maxHeight : {height}}}>
                {
                    sublist.map((item) => {
                        return(
                            <FooterSubList
                            href={item.href}
                            text={item.text}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FooterMenuList;