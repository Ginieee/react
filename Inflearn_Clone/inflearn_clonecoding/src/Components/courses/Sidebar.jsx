import React from 'react';

import { sidebarMenu } from 'Data/courses/sidebarMenu'
import Accordion from './Accordion';

function Sidebar(props) {
    return (
        <aside className='column is-2 sidebar_left'>
            <nav className='accordions is-hidden-mobile'>
                <div className='accordion'>
                    <a className='e-change-qs accordion-header' href='/courses'>전체 강의</a>
                </div>
                {
                    sidebarMenu.map((item) => {
                        return(
                            <Accordion
                            id={item.id}
                            title={item.title}
                            toggle={item.toggle}
                            />
                        );
                    })
                }
            </nav>
        </aside>
    );
}

export default Sidebar;